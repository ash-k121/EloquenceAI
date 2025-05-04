io.on('connection', (socket) => {
  console.log('New user connected');

  // When a user joins a room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
    
    // Notify all other users in the room that a new user has joined
    socket.to(roomId).emit('user-joined', socket.id);

    // If there's already someone else in the room, send an offer
    const usersInRoom = io.sockets.adapter.rooms.get(roomId);
    if (usersInRoom && usersInRoom.size > 1) {
      socket.to(roomId).emit('send-offer', socket.id);
    }
  });

  // Handle the offer
  socket.on('offer', (data) => {
    socket.to(data.roomId).emit('offer', data);
  });

  // Handle the answer
  socket.on('answer', (data) => {
    socket.to(data.roomId).emit('answer', data);
  });

  // Handle ICE candidate
  socket.on('ice-candidate', (data) => {
    socket.to(data.roomId).emit('ice-candidate', data);
  });

  // When user disconnects, notify others in the room
  socket.on('disconnect', () => {
    console.log('User disconnected');
    socket.broadcast.emit('user-left', socket.id);
  });
});
