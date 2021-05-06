import { types } from "../types/types";

const initialState = {
  categories: [],
  activeCategory: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.categoryActive:
      return { ...state, activeCategory: action.payload };
    case types.categoryListLoaded:
      return {
        ...state,
        categories: [...action.payload],
      };
    case types.categoryClearActive:
      return {
        ...state,
        activeCategory: null,
      };
    default:
      return state;
  }
};
