import { View, Text } from 'react-native';
import React from 'react';

import { styles } from 'utils/stylesChat';
import { useSelector } from 'react-redux';

export default function MessageComponent({ item, user }: any) {
  const { id } = useSelector((state: RootState) => state.auth.data);
  const status = item.user !== id;

  return (
    <View>
      <View
        style={
          status
            ? styles.mmessageWrapper
            : [styles.mmessageWrapper, { alignItems: 'flex-end' }]
        }
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={
              status
                ? styles.mmessage
                : [styles.mmessage, { backgroundColor: 'rgb(194, 243, 194)' }]
            }
          >
            <Text>{item.text}</Text>
          </View>
        </View>
        <Text style={{ marginLeft: 40 }}>{item.time}</Text>
      </View>
    </View>
  );
}
