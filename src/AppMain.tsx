import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppMainProps} from './types';

const AppMain: FC<AppMainProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>메인</Text>
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

export default React.memo(AppMain);
