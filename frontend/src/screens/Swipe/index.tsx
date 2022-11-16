import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import i18n from 'translations';
import spacingStyles from 'styles/spacing';
import { Cross, Tick } from 'assets';
import api from 'utils/openUrl/api';
import { cateogryMap, newShade } from 'screens/Collection/utils';
import socket from 'utils/socket';
import { useSelector } from 'react-redux';
import TinderCard from 'react-tinder-card';
import Sticker from 'screens/Swipe/Sticker';

// interface Card {
//   swipeData?: any;
//   ad?: any;
//   countryData?: any;
// }

// ten stickers are GET from the server, when swipe right or left, the sticker is POST to the server and removed from the array
// if 5 or less stickers are remaining, GET 10 more stickers
const Swipe = () => {
  const [cards, setCards] = useState<any[]>([]);
  const { id } = useSelector((state: RootState) => state.auth.data);

  const handleChat = (name: string, user1: string, user2: string) => {
    socket.emit('createChat', name, user1, user2);
  };

  const handleSwipeTick = () => {
    api
      .post('/swipe', {
        user_id: cards[0]?.swipeData.user_id,
        randomSticker: cards[0]?.swipeData.sticker,
      })
      .then(res => {
        handleChat('testtttt', '6369ac9cda56ac6f887f6438', id);
      })
      .catch(err => console.log(err));
    // setCards([])
    getStickerData();
    
  };

  const handleSwipeCross = () => {
    // setCards([])
    getStickerData();
  };

  const getStickerData = async () =>
    await api.get('/swipe').then(async (data: any) => {
      if (data?.response?.status === 400) {
        throw data?.response?.data?.error;
      }
      setCards([data.data]);
    });

  // const get10Stickers = async () => {
  //   for (let i = 0; i < 10; i++) {
  //     await getStickerData();
  //   }
  // };

  useEffect(() => {
    getStickerData();
  }, []);

  const onSwipe = (direction: any) => {
    switch (direction) {
      case 'left':
        handleSwipeCross();
        break;
      case 'right':
        handleSwipeTick();
        break;
    }
    // getStickerData();
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    switch (myIdentifier) {
      case 'left':
        handleSwipeCross();
        break;
      case 'right':
        handleSwipeTick();
        break;
    }
    // getStickerData();
  };

  return (
    <SafeAreaView style={spacingStyles.mainScreen}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#04B600', '#0094FF']}
          style={styles.linearGradient}
        >
          <Text style={styles.bigHeader}>{i18n.t('swipe.title')}</Text>
        </LinearGradient>

        <View style={styles.cardsContainer}>

          {
            cards.map((card: any) => {
              return (
                <TinderCard
                  onSwipe={onSwipe}
                  onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                  preventSwipe={['up', 'down']}
                  swipeThreshold={0.5}
                  swipeRequirementType={'position'}
                  key={card?.swipeData?.sticker}
                >
                  <Sticker card={card} />
                </TinderCard>
              )
            })
          }
        </View>


        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={handleSwipeCross}
          >
            <LinearGradient
              colors={['#FF8A00', '#E12900']}
              style={styles.linearGradientButton}
            >
              <Image
                source={Cross}
                style={{ tintColor: 'white', width: 20, height: 20 }}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRed} onPress={handleSwipeTick}>
            <LinearGradient
              colors={['#58DBDB', '#58DB72']}
              style={styles.linearGradientButton}
            >
              <Image
                source={Tick}
                style={{ tintColor: 'white', width: 25, height: 25 }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Swipe;
