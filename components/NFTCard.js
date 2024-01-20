import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectangleButton } from './Button';

import { SubInfo, NFTTitle, EtherPrice, People, EndDate } from './SubInfo';

const NFTCards = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      margin: SIZES.base,
      marginBottom: SIZES.extraLarge,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250}}>
        <Image source={data.image} resizeMode='cover' 
          style={{
            width: "100%",
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }} 
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      
      <SubInfo />
    </View>
  )
}

export default NFTCards
