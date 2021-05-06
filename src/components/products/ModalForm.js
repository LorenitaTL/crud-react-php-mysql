import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductActive,
  productStartAddNew,
  productStartUpdate,
} from "../../actions/products";
import { uiCloseModal } from "../../actions/ui";

const initData = {
  code: "",
  name: "",
  price: "",
  quantity: "",
  category: "",
};
export const ModalForm = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeProduct } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initData);
  const [category, setCategory] = useState("Cargando información...");
  const { name, price, quantity } = formValues;

  useEffect(() => {
    setFormValues(activeProduct ?? initData);
  }, [activeProduct, setFormValues]);

  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(clearProductActive());
  };

  const handleCategoryChange = ({ target }) => {
    setCategory(target.value);
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    activeProduct
      ? dispatch(productStartUpdate(formValues))
      : dispatch(productStartAddNew(formValues));
    closeModal();
  };
  return modalOpen
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal">
            <section className="modal-main animate__animated animate__zoomIn">
              <div className="title">
                <h2>New Product</h2>
              </div>
              <form onSubmit={handleSubmitForm}>
                <div className="content">
                  <div className="form-item">
                    <label>Name: </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-item">
                    <label>Price: </label>
                    <input
                      type="text"
                      name="price"
                      value={price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-item">
                    <label>Category: </label>
                    <select
                      className=""
                      id="category"
                      name="category"
                      value={category}
                      onChange={handleCategoryChange}
                    >
                      <option key="0" value="0">
                        Selecciona una categoría
                      </option>
                      {categories.map((category) => (
                        <option
                          key={category.id_category}
                          value={category.id_category}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-item">
                    <label>Qty: </label>
                    <input
                      type="text"
                      name="quantity"
                      value={quantity}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="footer">
                  <button id="cancel" onClick={closeModal}>
                    <h2>
                      <i className="fa fa-times" aria-hidden="true"></i> Cancel
                    </h2>
                  </button>
                  <button type="submit" id="save">
                    <h2>
                      <i className="fa fa-check" aria-hidden="true"></i> Save
                    </h2>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
