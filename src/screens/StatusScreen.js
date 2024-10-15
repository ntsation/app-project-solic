import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRequests } from '../hooks/useRequests';

const StatusScreen = () => {
  const { requests } = useRequests();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Status das Solicitações</Text>
      <FlatList
        data={requests}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Serviço: {item.service}</Text>
            <Text>Descrição: {item.description}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StatusScreen;
