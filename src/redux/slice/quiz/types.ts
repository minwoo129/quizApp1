import {Question} from '../../state/AdditionalTypes';

export type getQuestionsResponse = {
  response_code: number;
  results: Question[];
};
