import {difficultyType} from '../../../redux/state/AdditionalTypes';
import {QuizInfoFooterBtnProps} from './childrens/types';

export interface HeaderProps {
  onPressBack(): void;
}

export interface SelectQuizInfoProps extends QuizInfoFooterBtnProps {
  visible: boolean;
  categoryTitles: string[];
  levels: string[];
}

// =========================================================
export type getQuestionParams = {
  amount: number;
  type: 'multiple';
  category: number;
};

export type LevelDataType = {
  [key in string]: difficultyType;
};
