import React from "react";
import { Category } from "../components/categories/Category";
import { Form } from "../components/categories/Form";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

export const CategoriesPage = () => {
  return (
    <div>
      <Header />
      <h1 className="title">CRUD React - PHP - MySQL</h1>
      <SearchBar />
      <div className="categories">
        <Form />

        <div className="list">
          <h2>List of categories</h2>
          <div className="items">
            <Category />
            <Category />
            <Category />
            
          </div>
        </div>
      </div>
    </div>
  );
};
