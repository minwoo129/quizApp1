import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderProps} from './types';
import CommonHeader from '../../common/CommonHeader';
import {IC_BACK} from '../../../../utils/icons';

const Header: FC<HeaderProps> = ({onPressBack, page}) => {
  let title = '퀴즈풀기';
  if (page === 2) title = '채점 결과';

  return (
    <CommonHeader
      leftSideElements={[
        {
          type: 'iconButton',
          source: IC_BACK,
          onPress: onPressBack,
        },
      ]}
      centerElements={[{type: 'headerTitle', title}]}
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
