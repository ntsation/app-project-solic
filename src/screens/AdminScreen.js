import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { useRequests } from '../hooks/useRequests';

const AdminScreen = () => {
  const { requests, removeRequest, updateRequest } = useRequests();

  const handleRemove = (index) => {
    Alert.alert(
      'Confirmar Remoção',
      'Você tem certeza que deseja remover esta solicitação?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Remover', onPress: () => {
          removeRequest(index);
          Alert.alert('Sucesso', 'Solicitação removida!');
        }},
      ],
      { cancelable: false }
    );
  };

  const handleConclude = (index) => {
    const updatedRequest = { ...requests[index], status: 'Concluída' };
    updateRequest(index, updatedRequest);
    Alert.alert('Sucesso', 'Solicitação concluída!');
  };

  const renderRequestItem = ({ item, index }) => (
    <View style={styles.requestItem}>
      <Text style={styles.serviceText}>Serviço: {item.service}</Text>
      <Text>Descrição: {item.description}</Text>
      <Text>Status: {item.status}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleConclude(index)}>
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.removeButton]} onPress={() => handleRemove(index)}>
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administração de Solicitações</Text>
      <FlatList
        data={requests}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRequestItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#3498db',
  },
  requestItem: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AdminScreen;
