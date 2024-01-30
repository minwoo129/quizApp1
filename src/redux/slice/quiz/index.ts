import {createSlice} from '@reduxjs/toolkit';
import {quizInitialState as initialState} from '../../state';
import {
  addQuizRecordAction,
  clearQuizDataAction,
  getQuestionsResponse,
  setQuizRecordsAction,
} from './types';
import {createPromiseThunk} from '../../lib/AsyncUtils';
import {
  ConvertQuestions,
  FilterIncorrectQuestions,
} from './additionalFunctions';
import {setStorageData} from '../../../storage';

/**
 * ============ Redux 액션 생성 함수 ============
 * - 액션 타입: quiz/getQuestions
 * - 디스패치 방식: 비동기
 * - 수행 기능: 문제 목록 요청
 */
export const getQuestions = createPromiseThunk<getQuestionsResponse>({
  type: 'quiz/getQuestions',
  method: 'get',
  path: '/api.php',
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    clearQuizData: (state, action: clearQuizDataAction) => {
      state.questions = null;
    },
    setQuizRecords: (state, action: setQuizRecordsAction) => {
      state.quizRecords = action.payload;
      state.incorrectQuizRecords = FilterIncorrectQuestions(action.payload);
    },
    addQuizRecord: (state, action: addQuizRecordAction) => {
      let newRecords = [...state.quizRecords];
      newRecords.push(action.payload);
      state.quizRecords = newRecords;
      state.incorrectQuizRecords = FilterIncorrectQuestions(newRecords);

      setStorageData({
        key: 'quizRecord',
        value: {records: newRecords, totalElements: newRecords.length},
      });
    },
  },
  extraReducers: builder => {
    // getQuestions =============================================================
    builder.addCase(getQuestions.pending, (state, action) => {});
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      const newQuestions = ConvertQuestions(action.payload.results);
      state.questions = newQuestions;
    });
    builder.addCase(getQuestions.rejected, (state, action) => {
      throw action.payload;
    });
  },
});

export default quizSlice.reducer;
export const {clearQuizData, setQuizRecords, addQuizRecord} = quizSlice.actions;
