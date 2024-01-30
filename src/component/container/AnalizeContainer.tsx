import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface AnalizeContainerProps {}

const AnalizeContainer: FC<AnalizeContainerProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>AnalizeContainer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(AnalizeContainer);
