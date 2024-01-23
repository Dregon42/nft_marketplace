import { View, Text, Image, TextInput } from 'react-native';

import { COLORS, SIZES, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      {/* Logo and Profile Image */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image 
          source={assets.logo} 
          resizeMode='contain'
          style={{ width: 90, height: 25, }}
        />
        <View style={{ width: 45, height: 45}}>
          <Image  
            source={assets.person01}
            resizeMode='contain'
            style={{ width: '100%', height: '100%'}}
          />
          <Image  
            source={assets.badge}
            resizeMode='contain'
            style={{ width: 15, height: 15, position:'absolute', bottom: 0, right: 0}}
          />
        </View>
      </View>

      {/* Welcome user */}
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontFamily: 'Roboto', fontSize: SIZES.small, color: COLORS.white}}>
          Hello, Kynzie 👋
        </Text>
        <Text style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: SIZES.large, color: COLORS.white}}>
          Let's find a NFT masterpiece
        </Text>
      </View>

      {/* Search Bar */}
      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          borderRadius: 100,
          backgroundColor: COLORS.gray,
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small
        }}>
          <Image 
            source={assets.search}
            resizeMode='contain'
            style={{ width: 20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput 
            placeholder='Search NFTs'
            style={{ flex: 1}}
            onChangeText={onSearch}
          />
        </View>

      </View>
    </View>
  )
}

export default HomeHeader
