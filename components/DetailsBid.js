import { Image, Text, View } from 'react-native';

import { EtherPrice } from './SubInfo';
import { COLORS, SIZES } from '../constants';

const DetailsBid = ({ bid }) => {
  return (
    <View style={{ 
      width: '100%', 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base *2
    }}>
      <Image 
        source={bid.image}
        resizeMode='contain'
        style={{ width: 48, height: 48}}
      />
      <View>
        <Text style={{
          fontSize: SIZES.small,
          fontWeight: 500,
          color: COLORS.primary
        }}> 
          Bid placed by {bid.name}
        </Text>
        <Text style={{
          fontSize: SIZES.small - 2,
          fontWeight: 'normal',
          color: COLORS.secondary,
          marginTop: 3,
        }}> 
          {bid.date}
        </Text>
      </View>

      <EtherPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid
