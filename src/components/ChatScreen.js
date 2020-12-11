import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import io from 'socket.io-client';

const ChatScreen = () => {
  const socket = io('localhost:3000');
  let msg = 'hello';
  useEffect(() => {
    socket.on('chat msg', () => {
      console.log('new msg');
    });
  }, []);

  return (
    <View>
      <Text>Testing Socket.io</Text>
      <Button title='send' onPress={() => socket.emit('chat msg', msg)} />
    </View>
  );
};

export default ChatScreen;
