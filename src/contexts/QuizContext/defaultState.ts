import {QuestionAnswer} from '../../component/common/CommonQuestionGrid/types';
import {QuizRecord} from '../../redux/state/AdditionalTypes';
import {QuizContextSetState, QuizContextState} from './types';

export const QuizContextDefaultState: QuizContextState = {
  /** 선택한 카테고리 idx */
  categoryIdx: 0,
  /** 선택한 난이도 idx */
  levelIdx: 0,
  /** 현재 문제 페이지 */
  currentQuestionIdx: 0,
  /** 문제 및 선택값 정보 */
  questionAnswers: [],
  /** 퀴즈 시작 시간 */
  startTime: '',
  /** 퀴즈 종료 시간 */
  endTime: '',
};

export const QuizContextDefaultSetState: QuizContextSetState = {
  /**
   * 선택한 카테고리 idx 설정
   * - 연결 데이터: categoryIdx
   */
  setCategoryIdx: (idx: number) => {},
  /**
   * 선택한 난이도 idx 설정
   * - 연결 데이터: levelIdx
   */
  setLevelIdx: (idx: number) => {},
  /**
   * 현재 문제 페이지 설정
   * - 연결 데이터: currentQuestionIdx
   */
  setCurrentQuestionIdx: (idx: number) => {},
  /**
   * 문제 및 선택값 정보 설정
   * - 연결 데이터: questionAnswers
   */
  setQuestionAnswers: (questionAnswers: QuestionAnswer[]) => {},
  /**
   * 퀴즈 시작 시간 설정
   * - 연결 데이터: startTime
   */
  setStartTime: (startTime: string) => {},
  /**
   * 퀴즈 종료 시간 설정
   * - 연결 데이터: endTime
   */
  setEndTime: (endTime: string) => {},
};

export const QuizRecordDefault: QuizRecord = {
  createdAt: '',
  endTime: '',
  idx: 0,
  questionAnswers: [],
  result: {
    correctCount: 0,
    wrongCount: 0,
  },
  startTime: '',
};
