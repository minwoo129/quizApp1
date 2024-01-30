import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const IncorrectNote = ({navigation, route}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>IncorrectNote</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(IncorrectNote);
