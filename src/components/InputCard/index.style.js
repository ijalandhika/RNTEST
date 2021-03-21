import {StyleSheet} from 'react-native';

import {isAndroid} from '@helpers';

export const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical: isAndroid() ? 0 : 20,
    borderColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    // overflow: 'hidden',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 10,
    position: 'relative',
    backgroundColor: 'white',
    width: '90%',
  },
  cardFormula: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
});
