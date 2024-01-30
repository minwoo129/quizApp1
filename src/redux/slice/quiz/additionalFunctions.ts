import _ from 'lodash';
import {
  IncorrectQuizRecord,
  Question,
  QuestionItem,
  QuizRecord,
} from '../../state/AdditionalTypes';

export const ConvertQuestions = (questions: Question[]) => {
  let newItems: QuestionItem[] = [];

  for (let q of questions) {
    const {correct_answer, incorrect_answers} = q;
    let answers = [...incorrect_answers, correct_answer];
    answers = _.shuffle(answers);

    newItems.push({
      ...q,
      answers,
    });
  }
  return newItems;
};

export const ConvertIncorrectQuizRecord = (
  incorrectRecords: IncorrectQuizRecord[],
  newRecord: QuizRecord,
) => {
  let newIncorrectRecords: IncorrectQuizRecord[] = [...incorrectRecords];
  const withIdxAnswers = newRecord.questionAnswers.map((item, idx) => {
    return {
      ...item,
      answerIdx: idx,
    };
  });
  const filteredAnswers = withIdxAnswers.filter(item => !item.isPass);

  const firstIdx = incorrectRecords.length;
  const {createdAt} = newRecord;
  const quizIdx = newRecord.idx;

  newIncorrectRecords = filteredAnswers.map((item, index) => {
    return {
      createdAt,
      question: item,
      idx: firstIdx + index,
      quizIdx,
      answerIdx: item.answerIdx,
    };
  });

  newIncorrectRecords.sort((a, b) => b.idx - a.idx);

  return newIncorrectRecords;
};
