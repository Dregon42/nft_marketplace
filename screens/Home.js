import {useState} from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { FocusedStatusBar, HomeHeader, NFTCards } from '../components';
import { COLORS, NFTData } from '../constants';


const Home = () => {
  // implement search functionality
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) {
      return setNftData(NFTData);
    };
    // filter through the NFTs
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList 
            data={nftData} 
            renderItem={({ item }) => <NFTCards data={item} />} 
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>} />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white}} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
