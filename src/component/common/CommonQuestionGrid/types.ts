import {StyleProp, ViewStyle} from 'react-native';
import {QuestionItem} from '../../../redux/state/AdditionalTypes';

export interface CommonQuestionGridProps {
  visible?: boolean;
  idx: number;
  question: QuestionItem;
  onSelectAnswer(answerData: QuestionAnswer): void;
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

export interface QuestionAnswer extends QuestionItem {
  selectAnswer: string;
  isPass: boolean;
}
