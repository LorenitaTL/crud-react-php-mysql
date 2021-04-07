import React from "react";
import { Header } from "../components/Header";
import { ListProducts } from "../components/products/ListProducts";
import { ModalForm } from "../components/products/ModalForm";
import { SearchBar } from "../components/SearchBar";
import useModal from "../hooks/useModal";
export const ProductsPage = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div>
      <Header />
      <h1 className="title">CRUD React - PHP - MySQL</h1>
      <SearchBar show={toggle} addProduct={true}/>
      <ListProducts />
      <ModalForm isShowing={isShowing} hide={toggle} />
    </div>
  );
};
