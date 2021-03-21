import {Dimensions, Platform} from 'react-native';

let dimensions = Dimensions.get('window');

export const {height, width} = dimensions;

export const isIphoneX = () => {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
};

export const isIPhoneXSize = dim => {
  return dim.height == 812 || dim.width == 812;
};

export const isIPhoneXrSize = dim => {
  return dim.height == 896 || dim.width == 896;
};

export const isAndroid = () => {
  return Platform.OS === 'android' && true;
};

export const isScreen16 = () => {
  const aspectRatio = height / width;
  return aspectRatio == 1.6;
};
