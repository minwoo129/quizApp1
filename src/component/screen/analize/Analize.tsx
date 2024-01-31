import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Header from './Header';

const Analize = ({navigation, route}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollInsideView: {
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default React.memo(Analize);
