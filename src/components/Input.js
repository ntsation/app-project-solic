import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
  placeholderTextColor = '#999',
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor}
      selectionColor="#3498db" // Cor do cursor
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#3adb34',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    color: '#333', // Cor do texto
    backgroundColor: '#f9f9f9', // Fundo do input
    elevation: 1, // Para dar um leve efeito de sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

export default Input;
