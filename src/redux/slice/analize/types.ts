import {PayloadAction} from '@reduxjs/toolkit';
import {QuizRecord} from '../../state/AdditionalTypes';

export type updateAnalizeDataAction = PayloadAction<QuizRecord[]>;
