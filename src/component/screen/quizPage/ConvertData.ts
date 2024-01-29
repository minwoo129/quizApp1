import {LevelData} from './defaultDatas';
import {convertGetQuestionsParamsArgs, getQuestionParams} from './types';

export const convertGetQuestionsParams = (
  args: convertGetQuestionsParamsArgs,
) => {
  const {categoryValue, categorys, levelValue} = args;

  let result: getQuestionParams = {
    amount: 10,
    type: 'multiple',
    category: categorys[categoryValue],
    difficulty: LevelData[levelValue],
  };

  return result;
};
