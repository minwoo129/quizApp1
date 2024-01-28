import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {RootState} from '../redux/slice';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
