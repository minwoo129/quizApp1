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
  ConvertIncorrectQuizRecord,
  ConvertQuestions,
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
      const {incorrectRecords, quizRecords} = action.payload;
      state.quizRecords = quizRecords;
      state.incorrectQuizRecords = incorrectRecords;
    },
    addQuizRecord: (state, action: addQuizRecordAction) => {
      let newRecords = [...state.quizRecords];
      newRecords.push(action.payload);
      state.quizRecords = newRecords;

      let newIncorrectRecords = [...state.incorrectQuizRecords];
      const incorrectRecords = ConvertIncorrectQuizRecord(
        newIncorrectRecords,
        action.payload,
      );
      newIncorrectRecords = [...incorrectRecords, ...newIncorrectRecords];
      state.incorrectQuizRecords = newIncorrectRecords;

      console.log('newIncorrectRecords', newIncorrectRecords);

      setStorageData({
        key: 'quizRecord',
        value: {
          records: newRecords,
          totalElements: newRecords.length,
          incorrectRecords: newIncorrectRecords,
        },
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
