import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import loading from './loading/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({ loading, auth });

export type RootState = ReturnType<typeof rootReducer>;

export const rootSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
