import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
  placeholderTextColor = '#999', // Cor padrão para o texto do placeholder
}) => {
  return (
    <TextInput
      style={[styles.input, style]} // Combina os estilos
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor} // Define a cor do texto do placeholder
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    color: 'black', // Define a cor do texto para preto
  },
});

export default Input;
