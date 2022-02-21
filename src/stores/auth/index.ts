import reducer from './reducer';
import * as thunks from './thunks';

import type {
  LoginPayload, RegisterPayload, UserState, UserData,
} from './types';

export { reducer, thunks };
export type {
  LoginPayload, RegisterPayload, UserState, UserData,
};
