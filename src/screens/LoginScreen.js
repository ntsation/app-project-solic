import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import Input from '../components/Input'; // Importa o componente Input
import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      navigation.navigate('Admin');
    } else {
      Alert.alert('Erro', 'Credenciais incorretas!');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Input
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
