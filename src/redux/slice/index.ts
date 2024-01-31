import {combineReducers} from 'redux';
import quiz from './quiz';
import analize from './analize';

const rootReducer = combineReducers({
  quiz,
  analize,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
