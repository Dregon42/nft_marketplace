import { Image, Text, View } from 'react-native';
import { SIZES, FONTS, SHADOWS, assets, COLORS } from '../constants';

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{ fontFamily: 'sans-serif', fontWeight:'bold', fontSize: titleSize, color: COLORS.primary}}>
        {title}
      </Text>
      <Text style={{ fontFamily: 'sans-serif', fontWeight:'normal', fontSize: subTitleSize, color: COLORS.primary}}>
        {subTitle}
      </Text>
    </View>
  )
}
export const EtherPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={assets.eth}
        resizeMode='contain'
        style={{ width: 20, height: 20, marginRight: 2}}
      />
      <Text style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: SIZES.font, color:COLORS.primary }}>
        {price}
      </Text>
    </View>
  )
}

// individual image of interested person
export const ImageCmp = ({ imgUrl, index}) => {
  return (
    <Image 
      source={imgUrl}
      resizeMode='contain'
      style={{
          width: 48,
          height: 48,
          marginLeft: index === 0 ? 0 : -SIZES.font
      }}
    />
  )
}

// MAge through images of people interested in NFT
export const People = () => {
  return (
    <View style={{
        flexDirection: 'row',
    }}>
      {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} key={index} />
      ))}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
    }}>
      <Text style={{
        fontFamily: 'sans-serif',
        fontSize: SIZES.small,
        color: COLORS.primary
      }}>
        EndDate
      </Text>
      <Text style={{
        fontFamily: 'sans-serif',
        fontWeight: 800,
        fontSize: SIZES.medium,
        color: COLORS.primary
      }}>
        12h 30m
      </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font * 2,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: 'space-between'
    }}>
      <People />
      <EndDate />
    </View>
  )
}


