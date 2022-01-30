import { combineReducers } from 'redux';

import loading from './loading/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({ loading, auth });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
