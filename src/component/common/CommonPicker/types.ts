import {IndexPath} from '@ui-kitten/components';
import {StyleProp, ViewStyle} from 'react-native';

export interface CommonPickerProps {
  datas: string[];
  selectedIdx: number;
  onSelect: (idx: number, value: string) => void;
  title?: string;
  customStyle?: StyleProp<ViewStyle>;
}
