import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeProps} from './types';

const Home: FC<HomeProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Home);
