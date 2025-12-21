import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './style';

interface BatTextInputProps{
    pass:string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <>
        <TextInput
          style={styles.inputer}
          placeholder="Digite Aqui!"
          value={props.pass}
        />
    </>
  );
}