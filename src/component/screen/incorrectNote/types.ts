import {
  IncorrectQuizRecord,
  QuizRecord,
} from '../../../redux/state/AdditionalTypes';

export interface HeaderProps {}

export interface BodyProps extends IncorrectQuizItemExtendProps {
  incorrectQuizRecords: IncorrectQuizRecord[];
  quizRecords: QuizRecord[];
}

export interface IncorrectQuizItemProps extends IncorrectQuizItemExtendProps {
  record: IncorrectQuizRecord;
  isLastIdx: boolean;
}

interface IncorrectQuizItemExtendProps {
  onPressQuizItem: onPressQuizItem;
}

// =================================================================
export type onPressQuizItem = (item: IncorrectQuizRecord) => void;
