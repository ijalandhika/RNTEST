import React from 'react';
import {Image, View, TouchableWithoutFeedback, Text} from 'react-native';

import InputCard from '../InputCard';
import {styles} from './index.style';
import {globalStyles} from '../../index.style';

const CardBody = (props) => {
  if (props.type === 'sum') {
    return (
      <View style={styles.cardBodyContainer}>
        <View>
          <Text style={globalStyles.title}>Sum</Text>
          <InputCard type="+" />
        </View>
        <View>
          <Text style={globalStyles.title}>Multiply</Text>
          <InputCard type="*" />
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text style={globalStyles.title} nb>
        Prime
      </Text>
    </View>
  );
};

const Card = (props) => {
  const {type} = props.data;
  return (
    <View style={styles.container}>
      <CardBody type={type} />
    </View>
  );
};

export default Card;
