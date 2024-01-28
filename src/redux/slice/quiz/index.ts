import {createSlice} from '@reduxjs/toolkit';
import {quizInitialState as initialState} from '../../state';
import {getQuestionsResponse} from './types';
import {createPromiseThunk} from '../../lib/AsyncUtils';
import {ConvertQuestions} from './additionalFunctions';

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
  reducers: {},
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
export const {} = quizSlice.actions;
