import { types } from "../types/types";

const initialState = {
  modalOpen: false,
  formVisible: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };

    case types.uiShowForm:
      return {
        ...state,
        formVisible: true,
      };

    case types.uiHideForm:
      return {
        ...state,
        formVisible: false,
      };
    default:
      return state;
  }
};
