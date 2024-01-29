import {StyleProp, ViewStyle} from 'react-native';
import {QuestionItem} from '../../../redux/state/AdditionalTypes';

export interface CommonQuestionGridProps {
  question: QuestionItem;
  onSelectAnswer(selectValue: string, correctValue: string): void;
  customStyle?: StyleProp<ViewStyle>;
  answerViewCustomStyle?: StyleProp<ViewStyle>;
}

export interface AnswerBtnProps {
  answer: string;
  onPress(): void;
  idx: number;
  answerIdx: number;
  selectedIdx: number;
}
