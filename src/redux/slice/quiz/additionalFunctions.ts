import _ from 'lodash';
import {
  IncorrectQuizRecord,
  Question,
  QuestionItem,
  QuizRecord,
} from '../../state/AdditionalTypes';
import {IncorrectQuizOrignalRecord} from './types';
import {QuestionAnswer} from '../../../component/common/CommonQuestionGrid/types';
import {original} from '@reduxjs/toolkit';

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

export const FilterIncorrectQuestions = (records: QuizRecord[]) => {
  let original: IncorrectQuizOrignalRecord[] = [];
  for (let record of records) {
    const {questionAnswers, createdAt} = record;
    const filterdAnswers = questionAnswers.filter(item => !item.isPass);
    original = [...original, ...convertIncorrect1(createdAt, filterdAnswers)];
  }

  return convertIncorrect2(original);
};

const convertIncorrect1 = (createdAt: string, answers: QuestionAnswer[]) => {
  let original: IncorrectQuizOrignalRecord[] = [];
  original = answers.map(item => {
    return {
      createdAt,
      question: item,
    };
  });

  return original;
};

const convertIncorrect2 = (original: IncorrectQuizOrignalRecord[]) => {
  let incorrectRecords: IncorrectQuizRecord[] = [];
  const totalLength = original.length - 1;
  incorrectRecords = original.map((item, index) => {
    return {
      ...item,
      idx: totalLength - index,
    };
  });

  return incorrectRecords;
};

export const ConvertIncorrectQuizRecord = (
  incorrectRecords: IncorrectQuizRecord[],
  newRecord: QuizRecord,
) => {
  let newIncorrectRecords: IncorrectQuizRecord[] = [...incorrectRecords];
  const filteredAnswers = newRecord.questionAnswers.filter(
    item => !item.isPass,
  );
  const firstIdx = incorrectRecords.length;
  const {createdAt} = newRecord;

  newIncorrectRecords = filteredAnswers.map((item, index) => {
    return {
      createdAt,
      question: item,
      idx: firstIdx + index,
    };
  });

  newIncorrectRecords.sort((a, b) => b.idx - a.idx);

  return newIncorrectRecords;
};
