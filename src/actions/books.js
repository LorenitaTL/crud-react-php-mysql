import swal from "sweetalert";
import { fetchData } from "../helpers/fetch";
import { types } from "../types/types";

export const bookStartLoadList = () => {
  return async (dispatch) => {
    try {
      console.log("GET BOOKS");
      const resp = await fetchData("books");
      const body = await resp.json();
      console.log("Body", body);
      const books = body.books;
      dispatch(bookList(books));
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const bookStartAddNew = (book) => {
  return async (dispatch) => {
    try {
      console.log("NEW BOOK", book);
      const resp = await fetchData("books", book, "POST");
      const body = await resp.json();

      if (body.ok) {
        swal({
          title: "Success",
          text: "The book has saved successfully",
          icon: "success",
        }).then(() => {
          dispatch(bookStartLoadList());
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const bookStartUpdate = (book) => {
  return async (dispatch) => {
    try {
      console.log("UPDATE BOOK", book);
      const resp = await fetchData(`books/${book._id}`, book, "PUT");
      const body = await resp.json();

      if (body.ok) {
        swal({
          title: "Success",
          text: "The book has updated successfully",
          icon: "success",
        }).then(() => {
          dispatch(bookStartLoadList());
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const bookStartDelete = (bookID) => {
  return async (dispatch) => {
    try {
      console.log("DELETE BOOK", bookID);
      const resp = await fetchData(`books/${bookID}`, {}, "DELETE");
      const body = await resp.json();

      if (body.ok) {
        swal({
          title: "Success",
          text: "The book has deleted successfully",
          icon: "success",
        }).then(() => {
          dispatch(bookStartLoadList());
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const bookActive = (book) => ({
  type: types.bookActive,
  payload: book,
});

const bookList = (books) => ({
  type: types.bookListLoaded,
  payload: books,
});

export const clearBookActive = () => ({
  type: types.bookClearActive,
});
