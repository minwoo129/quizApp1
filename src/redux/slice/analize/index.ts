import {createSlice} from '@reduxjs/toolkit';
import {analizeInitialState as initialState} from '../../state';
import {updateAnalizeDataAction} from './types';
import {AnalizeCategory, AnalizeCorrect} from '../../state/AdditionalTypes';
import {AppColor} from '../../../component/common/Styles';
import {QuestionAnswer} from '../../../component/common/CommonQuestionGrid/types';

const analizeSlice = createSlice({
  name: 'analize',
  initialState,
  reducers: {
    updateAnalizeData: (state, action: updateAnalizeDataAction) => {
      const records = action.payload;
      const categoryMap = new Map<string, number>();
      let newCategorys: AnalizeCategory[] = [];
      let newCorrects: AnalizeCorrect[] = [];
      let questions: QuestionAnswer[] = [];

      for (let record of records) {
        const {questionAnswers} = record;
        const {category} = questionAnswers[0];
        const newCnt = categoryMap.get(category) ?? 0;
        categoryMap.set(category, newCnt + 1);

        questions = [...questionAnswers, ...questions];
      }
      // categorys =====================================================
      const colorCodes = [AppColor.main, '#3498db', '#f1c40f', '#e67e22'];
      let colorIndex = 0;
      for (let [key, value] of categoryMap) {
        newCategorys.push({
          value,
          label: key,
          color: colorCodes[colorIndex++],
        });
      }

      state.analizeCategorys = newCategorys;

      // corrects =====================================================
      let corrects = 0,
        incorrects = 0;
      for (let question of questions) {
        const {isPass} = question;
        if (isPass) corrects++;
        else incorrects++;
      }

      newCorrects = [
        {
          value: corrects,
          label: '정답',
          color: AppColor.text.correct,
        },
        {
          value: incorrects,
          label: '오답',
          color: AppColor.text.wrong,
        },
      ];

      state.analizeCorrects = newCorrects;
    },
  },
  extraReducers: builder => {},
});

export default analizeSlice.reducer;
export const {updateAnalizeData} = analizeSlice.actions;
