import React, {useState} from 'react';
import {TextInput, TouchableOpacity, Text, View} from 'react-native';

import {styles} from './index.style';

const Input = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const addition = () => firstValue + secondValue;
  const multiply = () => firstValue * secondValue;

  return (
    <>
      <TextInput
        style={{paddingHorizontal: 10}}
        placeholder="0"
        onChange={(value) => setFirstValue(value)}
        value={firstValue}
      />
      <Text style={{padding: 0}}>X</Text>
      <TextInput
        style={{paddingHorizontal: 10}}
        placeholder="0"
        onChange={(value) => setSecondValue(value)}
        value={secondValue}
      />
      <TouchableOpacity onPress={() => {}} style={styles.fxButton}>
        <Text style={{color: 'white'}}>ƒx</Text>
      </TouchableOpacity>
    </>
  );
};

export default Input;
