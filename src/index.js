/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Image, Dimensions, Platform} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Card} from './components';
import {styles} from './index.style';

import {images} from './assets/img';

const mockData = [
  {
    type: 'sum',
    image: 'karol_homepage'
  },
  {
    type: 'prime',
    image: 'design_party'
  },
];

const App: () => React$Node = () => {
  const [activeDot, setActiveDot] = useState(0);

  const deviceWidth = Dimensions.get('window').width;

  const isIphoneX = () => {
    const dim = Dimensions.get('window');

    const isIPhoneXSize = (dim) => {
      return dim.height == 812 || dim.width == 812;
    };
    const isIPhoneXrSize = (dim) => {
      return dim.height == 896 || dim.width == 896;
    };

    return (
      // This has to be iOS
      Platform.OS === 'ios' &&
      // Check either, iPhone X or XR
      (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Image source={images[mockData[activeDot].image]} style={[styles.imageBgBottom]} />
        <Image source={images[mockData[activeDot].image]} style={styles.imageBgTop} />
        <Pagination
          dotsLength={mockData.length}
          activeDotIndex={activeDot}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 1,
            marginTop: isIphoneX() ? 40 : 10,
            marginBottom: isIphoneX() ? 20 : 10,
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <Carousel
          data={mockData}
          renderItem={({item, index}) => <Card key={index} data={item} />}
          windowSize={1}
          style={{oveflow: 'visible'}}
          sliderWidth={deviceWidth}
          itemWidth={(deviceWidth * 80) / 100}
          layout={'default'}
          slideStyle={{overflow: 'visible'}}
          onBeforeSnapToItem={(index) => setActiveDot(index)}
          lockScrollWhileSnapping
          inactiveSlideOpacity={1}
        />
      </View>
    </>
  );
};

export default App;
