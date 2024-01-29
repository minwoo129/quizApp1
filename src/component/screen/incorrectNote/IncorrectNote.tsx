import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const IncorrectNote = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>오답노트</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(IncorrectNote);
