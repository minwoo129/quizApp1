import {StyleProp, ViewStyle} from 'react-native';

export interface CommonLoadingProps {
  visible: boolean;
  backgroundColor?: string;
  indicatorColor?: string;
  indicatorSize?: number | 'small' | 'large';
  informationText?: string;
  informationTextStyle?: StyleProp<ViewStyle>;
  indicatorVisible?: boolean;
}
