import {StyleProp, TextStyle} from 'react-native';

export interface CommonQuizAnaswerProps {
  answerIdx: number;
  correctAnswer: string;
  selectedAnswer: string;
  children: string;
  customStyle?: StyleProp<TextStyle>;
}
