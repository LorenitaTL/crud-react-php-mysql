import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CategoriesPage } from "../pages/CategoriesPage";
import { ProductsPage } from "../pages/ProductsPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductsPage} />
          <Route path="/categories" component={CategoriesPage} />
        </Switch>
      </div>
    </Router>
  );
};
