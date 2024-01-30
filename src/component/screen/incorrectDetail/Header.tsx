import React, {FC} from 'react';
import {HeaderProps} from './types';
import CommonHeader from '../../common/CommonHeader';
import {IC_BACK} from '../../../../utils/icons';

const Header: FC<HeaderProps> = ({onPressBack}) => {
  return (
    <CommonHeader
      leftSideElements={[
        {type: 'iconButton', source: IC_BACK, onPress: onPressBack},
      ]}
      centerElements={[{type: 'headerTitle', title: '오답 상세보기'}]}
    />
  );
};

export default React.memo(Header);
