import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import CategoryAnalizeChart from './charts/CategoryAnalizeChart';
import CorrectAnalizeChart from './charts/CorrectAnalizeChart';

const Analize = ({navigation, route}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.scrollInsideView}>
          <CategoryAnalizeChart />
          <CorrectAnalizeChart />

          <View style={styles.underEmptyView} />
        </View>
      </ScrollView>
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
  underEmptyView: {
    width: '100%',
    height: 20,
  },
});

export default React.memo(Analize);
