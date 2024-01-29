import {Categorys, difficultyType} from '../../../redux/state/AdditionalTypes';
import {QuizInfoFooterBtnProps, QuizResultFooterProps} from './childrens/types';

export interface HeaderProps {
  onPressBack(): void;
}

export interface SelectQuizInfoProps extends QuizInfoFooterBtnProps {
  visible: boolean;
  categoryTitles: string[];
  levels: string[];
}

export interface QuizQuestionProps {
  visible: boolean;
  onQuizFinished(): void;
}

export interface QuizResultProps extends QuizResultFooterProps {
  visible: boolean;
}

// =========================================================
export type getQuestionParams = {
  amount: number;
  type: 'multiple';
  category: number;
  difficulty: difficultyType;
};

export type LevelDataType = {
  [key in string]: difficultyType;
};

export type convertGetQuestionsParamsArgs = {
  categoryValue: string;
  levelValue: string;
  categorys: Categorys;
};

// =========================================================
