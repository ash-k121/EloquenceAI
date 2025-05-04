import React, { useEffect, useRef, useState } from 'react';
import { Mic, VideoOff, Phone, CopyPlus, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Update this to your server URL if needed

const VideoCallPage: React.FC = () => {
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [roomId, setRoomId] = useState('');
  const [joined, setJoined] = useState(false);
  const [copied, setCopied] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);

  const iceServers = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' }, // public STUN server
    ],
  };

  useEffect(() => {
    if (joined) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setLocalStream(stream);
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }

          const pc = new RTCPeerConnection(iceServers);
          setPeerConnection(pc);

          stream.getTracks().forEach((track) => {
            pc.addTrack(track, stream);
          });

          pc.onicecandidate = (event) => {
            if (event.candidate) {
              socket.emit('ice-candidate', { roomId, candidate: event.candidate });
            }
          };

          pc.ontrack = (event) => {
            const [stream] = event.streams;
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = stream;
              setRemoteStream(stream);
            }
          };

          socket.emit('join-room', roomId);

          socket.on('user-joined', async () => {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socket.emit('offer', { roomId, offer });
          });

          socket.on('offer', async ({ offer }) => {
            await pc.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            socket.emit('answer', { roomId, answer });
          });

          socket.on('answer', async ({ answer }) => {
            await pc.setRemoteDescription(new RTCSessionDescription(answer));
          });

          socket.on('ice-candidate', async ({ candidate }) => {
            try {
              await pc.addIceCandidate(new RTCIceCandidate(candidate));
            } catch (e) {
              console.error('Error adding ICE candidate', e);
            }
          });
        })
        .catch((error) => {
          console.error('Error accessing media devices:', error);
          alert('Could not access camera or microphone. Please check your permissions.');
        });
    }

    return () => {
      socket.off('user-joined');
      socket.off('offer');
      socket.off('answer');
      socket.off('ice-candidate');
    };
  }, [joined]);

  const joinRoom = () => {
    if (!roomId.trim() || joined) return;
    setJoined(true);
    console.log(`Joined room: ${roomId}`);
  };

  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
        setVideoEnabled(track.enabled);
      });
    }
  };

  const endCall = () => {
    if (peerConnection) {
      peerConnection.onicecandidate = null;
      peerConnection.ontrack = null;
      peerConnection.close();
    }

    localStream?.getTracks().forEach((track) => track.stop());
    remoteStream?.getTracks().forEach((track) => track.stop());

    setLocalStream(null);
    setRemoteStream(null);
    setPeerConnection(null);
    setJoined(false);
    setRoomId('');
    if (localVideoRef.current) localVideoRef.current.srcObject = null;
    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;

    console.log('Call ended');
  };

  const generateRoomCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomId(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(roomId)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        alert('Failed to copy room code to clipboard.');
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Video Call Translation</h2>

          {!joined && (
            <>
              <div className="mb-2 flex gap-2">
                <button
                  onClick={generateRoomCode}
                  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-1"
                >
                  <Wand2 size={16} /> Generate
                </button>
                <button
                  onClick={copyToClipboard}
                  disabled={!roomId}
                  className="bg-gray-300 text-black px-4 py-2 rounded-md flex items-center gap-1 hover:bg-gray-400 disabled:opacity-50"
                >
                  <CopyPlus size={16} /> {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="mb-6 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter or share room code"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <button
                  onClick={joinRoom}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Join
                </button>
              </div>
            </>
          )}

          {joined && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <video
                  ref={localVideoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <video
                  ref={remoteVideoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <div className="mb-2">
              <h3 className="text-sm font-medium text-gray-700">Live Translation</h3>
            </div>
            <p className="text-gray-400 italic">Translations will appear here during the call...</p>
          </div>

          {joined && (
            <div className="flex justify-center space-x-4">
              <ControlButton icon={<Mic size={20} />} label="Mute" color="gray" />
              <ControlButton
                icon={<VideoOff size={20} />}
                label={videoEnabled ? 'Video Off' : 'Video On'}
                color="gray"
                onClick={toggleVideo}
              />
              <ControlButton
                icon={<Phone size={20} />}
                label="End"
                color="red"
                onClick={endCall}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ControlButtonProps {
  icon: React.ReactNode;
  label: string;
  color: 'gray' | 'red';
  onClick?: () => void;
}

const ControlButton: React.FC<ControlButtonProps> = ({ icon, label, color, onClick }) => {
  const bgColor = color === 'gray' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-red-500 hover:bg-red-600';
  const textColor = color === 'gray' ? 'text-gray-700' : 'text-white';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex flex-col items-center p-3 rounded-full ${bgColor} ${textColor}`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </motion.button>
  );
};

export default VideoCallPage;