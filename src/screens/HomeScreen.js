import React, { useContext, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RequestContext } from '../context/RequestContext';

const HomeScreen = ({ navigation }) => {
  const { requests } = useContext(RequestContext);

  // Contar solicitações abertas usando useMemo
  const openRequestsCount = useMemo(() => {
    return requests.filter(request => !request.completed).length;
  }, [requests]);

  // Verificar se o escritório está aberto
  const isOfficeOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return day > 0 && day < 6 && hour >= 7 && hour < 17;
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')} // Caminho atualizado da imagem
        style={styles.image}
        resizeMode="contain" // Para ajustar a imagem dentro do espaço
      />
      <Text style={styles.welcomeText}>Bem-vindo ao App de Solicitações do CDC</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Solicitações Abertas: {openRequestsCount}</Text>
        <Text style={styles.cardStatus}>
          Escritório: {isOfficeOpen() ? 'Aberto' : 'Fechado'}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Solicitação')}>
          <Text style={styles.buttonText}>Fazer Solicitação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Status')}>
          <Text style={styles.buttonText}>Ver Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  image: {
    width: 100, 
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto horizontalmente dentro do próprio componente
    color: '#2c3e50',
  },
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3adb34',
  },
  cardStatus: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#3adb34',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
