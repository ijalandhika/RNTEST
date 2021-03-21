import {StyleSheet} from 'react-native';


export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageBgTop: {
    width: 316,
    height: 263,
    position: 'absolute',
    transform: [{rotate: '202deg'}],
    top: -150,
    right: -70,
  },
  imageBgBottom: {
    width: 518,
    height: 431,
    position: 'absolute',
    transform: [{rotate: '42deg'}],
    bottom: -100,
    left: -130,
  },

  title: {
    fontWeight: 'bold',
  },
});
