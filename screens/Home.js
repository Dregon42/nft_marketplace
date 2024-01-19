import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { FocusedStatusBar, HomeHeader, NFTCards } from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../constants';


const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  )
}

export default Home
