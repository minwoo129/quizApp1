import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabBarIconProps} from './types';
import {TabIconLabel} from './defaultDatas';
import {AppColor} from '../common/Styles';

const TabBarIcon: FC<TabBarIconProps> = ({focused, pageName}) => {
  const color = focused ? AppColor.main : '#2c2c2e';
  return (
    <View style={styles.container}>
      <Text style={{color}}>{TabIconLabel[pageName]}</Text>
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

export default React.memo(TabBarIcon);
