import {IncorrectQuizRecord} from '../../../redux/state/AdditionalTypes';

export interface HeaderProps {
  onPressBack(): void;
}

export interface QuizInfoProps {
  record: IncorrectQuizRecord;
}

export interface QuizExplanProps {
  record: IncorrectQuizRecord;
}
