import swal from "sweetalert";
import { fetchData } from "../helpers/fetch";
import { types } from "../types/types";

export const categoriesStartLoadList = () => {
  return async (dispatch) => {
    try {
      const dataToSend = {
        action: "get",
        type: "categories",
      };
      const resp = await fetchData(dataToSend);
      const body = await resp.json();
      console.log("Body", body);
      const categories = body.result;
      dispatch(categoriesList(categories));
    } catch (error) {}
  };
};

export const categoryStartAddNew = (category) => {
  return async (dispatch) => {
    console.log(category);
    try {
      const dataToSend = {
        action: "add",
        type: "categories",
        category: category,
      };
      console.log(dataToSend);
      const resp = await fetchData(dataToSend);
      const body = await resp.json();
      console.log("Body", body);
      const categoryResult = body.result;
      if (categoryResult !== null) {
        swal({
          title: "Success",
          text: "The category has saved successfully",
          icon: "success",
        }).then(() => {
          dispatch(categoriesStartLoadList());
        });
      } else {
        swal({
          title: "Error",
          text: "The category hasn't saved",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const categoryStartUpdate = (category) => {
  return async (dispatch) => {
    console.log("START UPDATE", category);
    try {
      const dataToSend = {
        action: "update",
        type: "categories",
        category: category,
      };
      const resp = await fetchData(dataToSend);
      const body = await resp.json();
      const result = body.result;
      console.log("Update ", result);
      if (result !== null) {
        swal({
          title: "Success",
          text: "The category has updated successfully",
          icon: "success",
        }).then(() => {
          dispatch(categoriesStartLoadList());
        });
      } else {
        swal({
          title: "Error",
          text: "Update error",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Error",
        text: "The category hasn't updated",
        icon: "error",
      });
    }
  };
};
const categoriesList = (categories) => ({
  type: types.categoryListLoaded,
  payload: categories,
});

export const categoryActive = (category) => ({
  type: types.categoryActive,
  payload: category,
});

export const clearCategoryActive = () => ({
  type: types.categoryClearActive,
  payload: null,
});
