import { types } from "../types/types";

const initialState = {
  products: [],
  activeProduct: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productActive:
      return { ...state, activeProduct: action.payload };
    case types.productListLoaded:
      return {
        ...state,
        products: [...action.payload],
      };
    case types.productClearActive:
      return {
        ...state,
        activeProduct: null,
      };
    default:
      return state;
  }
};
