import React from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { useRequests } from '../hooks/useRequests';

const AdminScreen = () => {
  const { requests, removeRequest, updateRequest } = useRequests();

  const handleRemove = (index) => {
    removeRequest(index);
    Alert.alert('Sucesso', 'Solicitação removida!');
  };

  const handleConclude = (index) => {
    const updatedRequest = { ...requests[index], status: 'Concluída' };
    updateRequest(index, updatedRequest);
    Alert.alert('Sucesso', 'Solicitação concluída!');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Administração de Solicitações</Text>
      <FlatList
        data={requests}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Serviço: {item.service}</Text>
            <Text>Descrição: {item.description}</Text>
            <Text>Status: {item.status}</Text>
            <Button title="Concluir" onPress={() => handleConclude(index)} />
            <Button title="Remover" onPress={() => handleRemove(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default AdminScreen;
