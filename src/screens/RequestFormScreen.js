import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // Importa o DropDownPicker
import Input from '../components/Input';
import Button from '../components/Button';
import { useRequests } from '../hooks/useRequests';

const RequestFormScreen = ({ navigation }) => {
  const { addRequest, error } = useRequests();
  const [service, setService] = useState(null); // Estado para o serviço
  const [description, setDescription] = useState(''); // Estado para a descrição

  // Opções do dropdown
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Reparos em ruas e calçadas', value: 'servico1' },
    { label: 'Melhoria na iluminação pública', value: 'servico2' },
    { label: 'Coleta de entulho ou lixo acumulado', value: 'servico3' },
    { label: 'Outros', value: 'servico4' },
    // Adicione mais serviços conforme necessário
  ]);

  const handleSubmit = () => {
    addRequest(service, description);
    if (!error) {
      Alert.alert('Sucesso', 'Solicitação enviada com sucesso!');
      navigation.navigate('Status');
    } else {
      Alert.alert('Erro', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {/* DropDownPicker para selecionar o serviço */}
      <DropDownPicker
        open={open}
        value={service}
        items={items}
        setOpen={setOpen}
        setValue={setService}
        setItems={setItems}
        placeholder="Selecione um serviço"
        style={{ marginBottom: 20 }}
      />

      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <Button 
        title="Enviar Solicitação" 
        onPress={handleSubmit}
        color="black" // Define a cor do botão para preto 
      />
    </View>
  );
};

export default RequestFormScreen;
