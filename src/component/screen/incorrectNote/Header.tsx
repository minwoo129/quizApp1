import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderProps} from './types';
import CommonHeader from '../../common/CommonHeader';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <CommonHeader
      centerElements={[{type: 'headerTitle', title: '오답노트'}]}
      customStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
});

export default React.memo(Header);
