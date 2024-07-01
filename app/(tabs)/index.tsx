import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NotificationScreen() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [greenButtonClicked, setGreenButtonClicked] = useState(false);
  const [redButtonClicked, setRedButtonClicked] = useState(false);

  const handleGreenButtonClick = () => {
    setBackgroundColor('#12E83D'); // Màu xanh lá cây
    setGreenButtonClicked(true);
    setRedButtonClicked(false);  // Reset red button state
  };

  const handleRedButtonClick = () => {
    setBackgroundColor('#FF4B2F'); // Màu đỏ
    setRedButtonClicked(true);
    setGreenButtonClicked(false);  // Reset green button state
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={handleGreenButtonClick}
      >
        <Text style={styles.buttonText}>Click me!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={handleRedButtonClick}
      >
        <Text style={styles.buttonText}>Click me!</Text>
      </TouchableOpacity>

      {greenButtonClicked && (
        <Text style={[styles.message, { color: 'pink' }]}>Green button clicked</Text>
      )}

      {redButtonClicked && (
        <Text style={[styles.message, { color: 'pink' }]}>Red button clicked</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});
