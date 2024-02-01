import React, {FC} from 'react';
import {Text} from 'react-native';
import {QuizItemBadgeProps} from './types';
import {AppColor} from '../Styles';

const QuizItemBadge: FC<QuizItemBadgeProps> = ({isSelected, isCorrect}) => {
  if (isSelected) {
    return <Text style={{color: AppColor.text.wrong}}>{'(선택한 답)'}</Text>;
  }

  if (isCorrect) {
    return <Text style={{color: AppColor.text.correct}}>{'(정답)'}</Text>;
  }

  return null;
};

export default React.memo(QuizItemBadge);
