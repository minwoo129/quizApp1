import {IndexPath} from '@ui-kitten/components';
import {StyleProp, ViewStyle} from 'react-native';

export interface CommonPickerProps {
  datas: string[];
  selectedIdx: IndexPath | IndexPath[];
  onSelect: (idx: IndexPath | IndexPath[]) => void;
  title?: string;
  customStyle?: StyleProp<ViewStyle>;
}
