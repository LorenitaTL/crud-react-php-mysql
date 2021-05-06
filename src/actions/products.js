import swal from "sweetalert";
import { fetchData } from "../helpers/fetch";
import { types } from "../types/types";

export const productsStartLoadList = () => {
  return async (dispatch) => {
    try {
      const dataToSend = {
        action: "get",
        type: "products",
      };
      const resp = await fetchData(dataToSend);
      const body = await resp.json();
      console.log("Body", body);
      const products = body.result;
      dispatch(productsList(products));
    } catch (error) {}
  };
};

export const productStartAddNew = (product) => {
  return async (dispatch) => {
    try {
      const dataToSend = { action: "add", type: "products", product: product };
      const resp = await fetchData(dataToSend);
      const body = await resp.json();
      console.log("Body", body);
      const productResult = body.result;
      if (productResult !== null) {
        swal({
          title: "Success",
          text: "The product has saved successfully",
          icon: "success",
        }).then(() => {
          dispatch(productsStartLoadList());
        });
      } else {
        swal({
          title: "Error",
          text: "The product hasn't saved",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const productStartUpdate = (product) => {
  return async (dispatch) => {
    try {
      const dataToSend = {
        action: "update",
        type: "products",
        product: product,
      };
      const resp = await fetchData(dataToSend);
      const body = await resp.json();
      const result = body.result;
      if (result !== null) {
        swal({
          title: "Success",
          text: "The product has updated successfully",
          icon: "success",
        }).then(() => {
          dispatch(productsStartLoadList());
        });
      }
    } catch (error) {}
  };
};

export const productStartDelete = (code) => {
  return async (dispatch) => {
    try {
      const dataToSend = {
        action: "delete",
        type: "products",
        code: code,
      };
      const resp = await fetchData(dataToSend);
      const body = await resp.json();
      const result = body.result;
      if (result !== null) {
        swal({
          title: "Success",
          text: "The product has deleted successfully",
          icon: "success",
        }).then(() => {
          dispatch(productsStartLoadList());
        });
      }
    } catch (error) {}
  };
};
const productsList = (products) => ({
  type: types.productListLoaded,
  payload: products,
});

export const productActive = (product) => ({
  type: types.productActive,
  payload: product,
});

export const clearProductActive = () => ({
  type: types.productClearActive,
  payload: null,
});
