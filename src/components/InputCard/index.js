import React, {useState} from 'react';

import {View, Text, TextInput} from 'react-native';

import Input from '../Input';
import {styles} from './index.style';

const InputCard = ({ type }) => {
  return (
    <View style={[styles.card, styles.cardFormula]}>
      <Input />
    </View>
  );
};

export default InputCard;
