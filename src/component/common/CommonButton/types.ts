import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native';
import {TextProps} from 'react-native-svg';

export interface CommonButtonProps extends TouchableOpacityProps {
  visible?: boolean;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
}
