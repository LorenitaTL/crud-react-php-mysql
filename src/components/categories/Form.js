import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryStartAddNew,
  categoryStartUpdate,
  clearCategoryActive,
} from "../../actions/categories";
import { uiHideForm } from "../../actions/ui";

const initData = {
  name: "",
  description: "",
  photo: null,
};
export const Form = () => {
  const [formValues, setFormValues] = useState(initData);
  const { activeCategory } = useSelector((state) => state.categories);

  const { name, description, photo } = formValues;
  const dispatch = useDispatch();

  useEffect(() => {
    setFormValues(activeCategory ?? initData);
  }, [activeCategory, setFormValues]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const clearForm = () => {
    dispatch(uiHideForm());
    dispatch(clearCategoryActive());
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    activeCategory
      ? dispatch(categoryStartUpdate(formValues))
      : dispatch(categoryStartAddNew(formValues));
    clearForm();
  };

  const handleSelectImage = () => {
    document.querySelector("#picture").click();
  };
  const selectImage = ({ target }) => {
    let file_reader = new FileReader();
    let file = target.files[0];
    if (file) {
      file_reader.onload = () => {
        setFormValues({ ...formValues, photo: file_reader.result });
      };
      file_reader.readAsDataURL(file);
    }
  };
  return (
    <div className="form animate__animated animate__fadeInLeftBig">
      <div className="title">
        <h2>{activeCategory ? "Update Category" : "New Category"}</h2>
      </div>

      <div className="content">
        {photo == null ? (
          <div className="add-img" onClick={handleSelectImage}>
            <i className="fas fa-file-image fa-5x"></i>
            <h3>Select Image</h3>
          </div>
        ) : (
          <div className="add-img" onClick={handleSelectImage}>
            <img
              className=""
              style={{ height: "100px", width: "100px" }}
              src={photo}
              alt="foto1"
            />
            <h3>Change Image</h3>
          </div>
        )}

        <input
          type="file"
          id="picture"
          name="picture"
          style={{ display: "none" }}
          accept=".jpeg, .jpg, .png"
          onChange={selectImage}
        ></input>
        <div>
          <label>Name:</label>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label>Description:</label>
          <div>
            <textarea
              rows={5}
              type="text"
              name="description"
              value={description}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button id="cancel" onClick={clearForm}>
          <h2>
            <i className="fa fa-times" aria-hidden="true"></i> Cancel
          </h2>
        </button>
        <button id="save" type="submit" onClick={handleSubmitForm}>
          <h2>
            <i className="fa fa-check" aria-hidden="true"></i> Save
          </h2>
        </button>
      </div>
    </div>
  );
};
