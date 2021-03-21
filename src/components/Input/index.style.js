import {StyleSheet} from 'react-native';

import {isAndroid} from '@helpers';

export const styles = StyleSheet.create({
  fxButton: {
    borderRadius: 10,
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: isAndroid() ? '100%' : '330%',
    zIndex: 10,
    // elevation: 20
  },
});
