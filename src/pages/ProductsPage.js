import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsStartLoadList } from "../actions/products";
import { Header } from "../components/Header";
import { ListProducts } from "../components/products/ListProducts";
import { ModalForm } from "../components/products/ModalForm";
import { SearchBar } from "../components/SearchBar";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  console.log(products);
  useEffect(() => {
    dispatch(productsStartLoadList());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <h1 className="title">CRUD React - PHP - MySQL</h1>
      <SearchBar addProduct={true} change={handleInputChange} />
      <ListProducts products={products} value={inputValue.toUpperCase()} />
      <ModalForm />
    </div>
  );
};
