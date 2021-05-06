import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesStartLoadList } from "../actions/categories";
import { Category } from "../components/categories/Category";
import { Form } from "../components/categories/Form";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

export const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { formVisible } = useSelector((state) => state.ui);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  console.log(categories);
  useEffect(() => {
    dispatch(categoriesStartLoadList());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <h1 className="title">CRUD React - PHP - MySQL</h1>
      <SearchBar value={inputValue} change={handleInputChange} />
      <div className="categories">
        {formVisible ? <Form /> : null}
        <div className="list">
          <h2>List of categories</h2>
          <div className="items">
            {categories
              .filter((category) => {
                if (!inputValue) return true;
                if (category.name.toUpperCase().includes(inputValue.toUpperCase())) {
                  return true;
                }
                return false;
              })
              .map((category, index) => (
                <Category category={category} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
