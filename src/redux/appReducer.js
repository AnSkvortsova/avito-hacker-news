import { types } from './types';

const initialState = {
  isLoading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return { ...state, isLoading: true};
    case types.HIDE_LOADER:
      return { ...state, isLoading: false};
    default: return state;
  };
};
