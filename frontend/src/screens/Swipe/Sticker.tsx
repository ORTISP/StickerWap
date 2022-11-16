import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { newShade } from 'screens/Collection/utils';

const Sticker = (props: any) => {
  return (
    <View style={styles.stickerContainer}>
      <View style={styles.sticker}>
        {props?.card?.ad ? (
          <View style={styles.adContainer}>
            <Text>{props?.card?.ad?.title}</Text>
            <Text>{props?.card?.ad?.description}</Text>
            <Image
              source={{ uri: props?.card?.ad?.image }}
              style={{ width: 200, height: 300 }}
            />
            <Text>{props?.card?.ad?.link}</Text>
          </View>
        ) : (
          <View
            style={[
              styles.cardContainer,
              {
                // backgroundColor: newShade(
                //   props?.card?.countryData ? props?.card?.countryData.color : '#000',
                //   180,
                // ),
              },
            ]}
          >
            <Image
              source={{
                uri: props?.card?.swipeData?.flag,
              }}
              style={{ width: 200, height: 120 }}
            />
            <Text style={styles.stickerId}>
              {props?.card?.swipeData?.sticker?.name}
            </Text>
            <Text style={styles.stickerCountry}>
              {props?.card?.swipeData?.sticker?.category}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Sticker;
