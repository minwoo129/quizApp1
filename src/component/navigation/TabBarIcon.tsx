import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabBarIconImageProps, TabBarIconProps} from './types';
import {TabIconLabel} from './defaultDatas';
import {AppColor} from '../common/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabBarIcon: FC<TabBarIconProps> = ({focused, pageName}) => {
  const color = focused ? AppColor.main : '#2c2c2e';
  return (
    <View style={styles.container}>
      <TabBarIconImage focused={focused} pageName={pageName} />
      <Text style={[styles.label, {color}]}>{TabIconLabel[pageName]}</Text>
    </View>
  );
};

const TabBarIconImage: FC<TabBarIconImageProps> = ({focused, pageName}) => {
  if (pageName === 'HomeContainer') {
    return (
      <Icon name="home" size={20} color={focused ? AppColor.main : '#2c2c2e'} />
    );
  }

  if (pageName === 'AnalizeContainer') {
    return (
      <Icon
        name="analytics"
        size={20}
        color={focused ? AppColor.main : '#2c2c2e'}
      />
    );
  }

  return (
    <Icon name="person" size={20} color={focused ? AppColor.main : '#2c2c2e'} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 3,
  },
});

export default React.memo(TabBarIcon);
