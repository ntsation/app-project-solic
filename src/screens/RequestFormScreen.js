import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../components/Input';
import Button from '../components/Button';
import { useRequests } from '../hooks/useRequests';

const RequestFormScreen = () => {
  const { addRequest, error } = useRequests();
  const [service, setService] = useState(null);
  const [description, setDescription] = useState('');
  
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Reparos em ruas e calçadas', value: 'Reparos em ruas e calçadas' },
    { label: 'Melhoria na iluminação pública', value: 'Melhoria na iluminação pública' },
    { label: 'Coleta de entulho ou lixo acumulado', value: 'Coleta de entulho ou lixo acumulado' },
    { label: 'Outros', value: 'Outros' },
  ]);

  const handleSubmit = () => {
    if (!service) {
      Alert.alert('Erro', 'Por favor, selecione um serviço.');
      return;
    }

    // Adiciona a solicitação
    addRequest(service, description);

    // Exibe popup de sucesso
    if (!error) {
      Alert.alert('Sucesso', 'Solicitação enviada com sucesso!');
    } else {
      Alert.alert('Erro', error);
    }
  };

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
        placeholder="Descrição (opcional)"
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
