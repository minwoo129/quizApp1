import {
  IncorrectQuizRecord,
  QuizRecord,
} from '../../../redux/state/AdditionalTypes';

export interface HeaderProps {}

export interface BodyProps {
  incorrectQuizRecords: IncorrectQuizRecord[];
  quizRecords: QuizRecord[];
}

export interface IncorrectQuizItemProps {
  record: IncorrectQuizRecord;
  isLastIdx: boolean;
}
