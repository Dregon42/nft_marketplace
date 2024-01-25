import { Text, View } from "react-native";
import { useState } from "react";

import { EtherPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES } from "../constants";

export const DetailsDesc = ({ data }) => {
  // Give snippet of the description
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false)


  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EtherPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5}}>
        <Text style={{ fontSize: SIZES.font, fontWeight: 500, color: COLORS.primary }}>
          Description
        </Text>
        <View style={{ marginTop: SIZES.base}}>
          <Text style={{
            fontSize: SIZES.small,
            color: SIZES.secondary,
            lineHeight: SIZES.large
          }}>
            {text}
            {!readMore && '...'}
            <Text style={{
              fontSize: SIZES.small,
              fontWeight: 500,
              color: COLORS.primary
            }}
            onPress={() => {
              if (!readMore) {
                setText(data.description);
                setReadMore(true);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false)
              }
            }}
            >
              {readMore ? 'Show Less' : 'Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

