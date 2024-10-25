import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRequests } from '../hooks/useRequests';

const StatusScreen = () => {
  const { requests } = useRequests();

  // Verifica se há solicitações
  const hasRequests = useMemo(() => requests.length > 0, [requests]);

  const renderRequestItem = ({ item }) => (
    <View style={styles.requestItem}>
      <Text style={styles.requestText}>Serviço: <Text style={styles.boldText}>{item.service}</Text></Text>
      <Text style={styles.requestText}>Descrição: <Text style={styles.boldText}>{item.description}</Text></Text>
      <Text style={styles.requestText}>Status: <Text style={styles.boldText}>{item.status}</Text></Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status das Solicitações</Text>
      {hasRequests ? (
        <FlatList
          data={requests}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderRequestItem}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.noRequestsText}>Nenhuma solicitação encontrada.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#3adb34',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  requestItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  requestText: {
    fontSize: 16,
    color: '#34495e',
  },
  boldText: {
    fontWeight: 'bold',
  },
  noRequestsText: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default StatusScreen;
