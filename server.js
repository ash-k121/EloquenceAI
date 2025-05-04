io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // When a user joins a room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room: ${roomId}`);
    
    // Notify all other users in the room that a new user has joined
    socket.to(roomId).emit('user-joined', socket.id);

    // If there's already someone else in the room, send the list of other users
    const usersInRoom = io.sockets.adapter.rooms.get(roomId);
    if (usersInRoom && usersInRoom.size > 1) {
      const otherUsers = [...usersInRoom].filter(id => id !== socket.id);
      socket.emit('other-users', otherUsers);
    }
  });

  // Handle the offer
  socket.on('offer', (data) => {
    console.log(`Offer received from ${socket.id} for room ${data.roomId}`);
    socket.to(data.roomId).emit('offer', data);
  });

  // Handle the answer
  socket.on('answer', (data) => {
    console.log(`Answer received from ${socket.id} for room ${data.roomId}`);
    socket.to(data.roomId).emit('answer', data);
  });

  // Handle ICE candidate
  socket.on('ice-candidate', (data) => {
    console.log(`ICE candidate received from ${socket.id} for room ${data.roomId}`);
    socket.to(data.roomId).emit('ice-candidate', data);
  });

  // When user disconnects, notify others in the same room
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    const rooms = [...socket.rooms].filter(room => room !== socket.id); // Get all rooms the user was in
    rooms.forEach((roomId) => {
      socket.to(roomId).emit('user-left', socket.id);
    });
  });
});