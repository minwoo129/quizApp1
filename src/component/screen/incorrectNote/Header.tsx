import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderProps} from './types';
import CommonHeader from '../../common/CommonHeader';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <CommonHeader centerElements={[{type: 'headerTitle', title: '오답노트'}]} />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(Header);
