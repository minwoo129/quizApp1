import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HomeContainerProps {}

const HomeContainer: FC<HomeContainerProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>HomeContainer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(HomeContainer);
