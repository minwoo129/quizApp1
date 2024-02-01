import 'react-native';
import React from 'react';
import IncorrectQuizItem from '../src/component/screen/incorrectNote/IncorrectQuizItem';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {IncorrectQuizRecord} from '../src/redux/state/AdditionalTypes';
import dayjs from 'dayjs';
import {render} from '@testing-library/react-native';

const defaultRecord: IncorrectQuizRecord = {
  question: {
    category: 'category',
    answers: ['answer1', 'answer2', 'answer3', 'answer4'],
    question: 'question',
    correct_answer: 'answer1',
    difficulty: 'easy',
    type: 'multiple',
    incorrect_answers: ['answer2', 'answer3', 'answer4'],
    isPass: false,
    selectAnswer: 'answer2',
  },
  idx: 0,
  createdAt: '2023-06-09 14:00:00',
  quizIdx: 0,
  answerIdx: 0,
};

describe('IncorrectQuizItem', () => {
  it('렌더링이 정상적으로 이루어지는가?', () => {
    renderer.create(
      <IncorrectQuizItem
        record={defaultRecord}
        isLastIdx={false}
        onPressQuizItem={() => {}}
      />,
    );
  });

  it('날짜가 정확하게 표시되는가?', () => {
    const component = render(
      <IncorrectQuizItem
        record={defaultRecord}
        isLastIdx={false}
        onPressQuizItem={() => {}}
      />,
    );
    const createdAtElement = component.getByTestId('createdAt');
    const componentValue = createdAtElement.children[0];
    const createdAtTxt = dayjs(defaultRecord.createdAt).format(
      '푼 날짜: YYYY년 MM월 DD일',
    );
    expect(componentValue).toEqual(createdAtTxt);
  });

  it('카테고리가 정확하게 표시되는가?', () => {
    const component = render(
      <IncorrectQuizItem
        record={defaultRecord}
        isLastIdx={false}
        onPressQuizItem={() => {}}
      />,
    );

    const categoryElement = component.getByTestId('category');
    const componentValue = categoryElement.children[0];
    const categoryTxt = `카테고리: ${defaultRecord.question.category}`;

    expect(componentValue).toEqual(categoryTxt);
  });
});
