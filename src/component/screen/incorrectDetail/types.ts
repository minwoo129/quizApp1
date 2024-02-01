import {IncorrectQuizRecord} from '../../../redux/state/AdditionalTypes';

export interface HeaderProps {
  onPressBack(): void;
}

export interface QuizInfoProps {
  record: IncorrectQuizRecord;
}
