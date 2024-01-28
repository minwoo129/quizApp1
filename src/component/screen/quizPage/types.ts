import {difficultyType} from '../../../redux/state/AdditionalTypes';

export interface HeaderProps {
  onPressBack(): void;
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
