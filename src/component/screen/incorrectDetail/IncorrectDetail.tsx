import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const IncorrectDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>IncorrectDetail</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(IncorrectDetail);
