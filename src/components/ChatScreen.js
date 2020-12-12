import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import io from 'socket.io-client';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('localhost:3000');
    socketRef.current.on('chat msg', (msg) =>
      setChatMessages((chatMessages) => [...chatMessages, msg])
    );
  }, []);

  const sendMessage = () => {
    socketRef.current.emit('chat msg', message);
    setMessage('');
  };

  return (
    <View>
      {chatMessages.map((msg) => (
        <Text>{msg}</Text>
      ))}
      <TextInput value={message} onChangeText={(text) => setMessage(text)} />
      <View>
        <Button title='send' onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatScreen;
