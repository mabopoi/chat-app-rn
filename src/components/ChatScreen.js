import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        <FlatList
          data={chatMessages}
          renderItem={(msg) => (
            <View style={styles.msgBackground}>
              <Text style={styles.msg}>{msg.item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <Text style={styles.msg}>There aren't messages yet</Text>
          )}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <View>
          <Button title='send' onPress={sendMessage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messagesContainer: {
    height: 400,
    width: 400,
    borderColor: '#000',
    borderWidth: 2,
    alignItems: 'center',
  },
  msgBackground: {
    backgroundColor: '#00C6D6',
    width: 150,
    borderRadius: 10,
    margin: 7,
  },
  msg: {
    fontSize: 16,
    marginLeft: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    height: 35,
    borderColor: '#000',
    borderWidth: 2,
  },
});

export default ChatScreen;
