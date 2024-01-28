import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CommonButtonProps} from './types';

const CommonButton: FC<CommonButtonProps> = ({
  visible = true,
  title,
  titleStyle,
  titleProps,
  ...props
}) => {
  if (!visible) return null;
  return (
    <TouchableOpacity {...props}>
      <Text {...titleProps} style={titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(CommonButton);
