import reducer from './reducer';
import * as actions from './actions';

import type {
  LoginPayload, RegisterPayload, UserState, UserData,
} from './types';

export { reducer, actions };
export type {
  LoginPayload, RegisterPayload, UserState, UserData,
};
