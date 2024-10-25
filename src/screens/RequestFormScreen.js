import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../components/Input';
import Button from '../components/Button';
import { useRequests } from '../hooks/useRequests';

const RequestFormScreen = ({ navigation }) => {
  const { addRequest, error } = useRequests();
  const [service, setService] = useState(null);
  const [description, setDescription] = useState('');
  
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Reparos em ruas e calçadas', value: 'sReparos em ruas e calçadas' },
    { label: 'Melhoria na iluminação pública', value: 'Melhoria na iluminação pública' },
    { label: 'Coleta de entulho ou lixo acumulado', value: 'Coleta de entulho ou lixo acumulado' },
    { label: 'Outros', value: 'Outros' },
  ]);

  const handleSubmit = () => {
    if (!service || !description) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    
    addRequest(service, description);
  };

  // Verifica se houve erro após a tentativa de adicionar solicitação
  useEffect(() => {
    if (error) {
      Alert.alert('Erro', error);
    } else if (service && description) {
      Alert.alert('Sucesso', 'Solicitação enviada com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('Status') },
      ]);
    }
  }, [error, service, description, navigation]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={service}
        items={items}
        setOpen={setOpen}
        setValue={setService}
        setItems={setItems}
        placeholder="Selecione um serviço"
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
      />

      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button 
        title="Enviar Solicitação" 
        onPress={handleSubmit} 
      />
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
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderColor: '#3adb34',
  },
  input: {
    marginBottom: 15,
  },
});

export default RequestFormScreen;
