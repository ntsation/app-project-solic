import React from 'react';
import { View, Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao App de Solicitações</Text>
      <Button title="Fazer Solicitação" onPress={() => navigation.navigate('Solicitação')} />
      <Button title="Ver Status" onPress={() => navigation.navigate('Status')} />
      <Button title="Login Admin" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default HomeScreen;
