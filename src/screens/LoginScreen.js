import React, { useState, useCallback } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import Input from '../components/Input'; 
import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(() => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (username === 'admin' && password === '1234') {
      navigation.navigate('Admin');
    } else {
      Alert.alert('Erro', 'Credenciais incorretas!');
    }
  }, [username, password, navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  input: {
    marginBottom: 15,
    borderColor: '#3adb34',
    borderWidth: 1,
  },
});

export default LoginScreen;
