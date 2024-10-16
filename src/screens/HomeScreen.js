import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { RequestContext } from '../context/RequestContext';

const HomeScreen = ({ navigation }) => {
  const { requests } = useContext(RequestContext);

  // Contar solicitações abertas
  const openRequestsCount = requests.filter(request => !request.completed).length;

  // Verificar se o escritório está aberto
  const isOfficeOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hour = now.getHours();
    return day > 0 && day < 6 && hour >= 7 && hour < 17; // Horário de funcionamento
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao App de Solicitações</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Solicitações Abertas: {openRequestsCount}</Text>
        <Text style={styles.cardStatus}>
          Escritório: {isOfficeOpen() ? 'Aberto' : 'Fechado'}
        </Text>
      </View>
      <Button title="Fazer Solicitação" onPress={() => navigation.navigate('Solicitação')} />
      <Button title="Ver Status" onPress={() => navigation.navigate('Status')} />
      <Button title="Login Admin" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardStatus: {
    fontSize: 16,
  },
});

export default HomeScreen;
