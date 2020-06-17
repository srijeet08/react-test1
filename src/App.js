import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";

import _HomePage from "./component/HomePage";
import _Error from "./component/Error";
import _Menu1 from "./component/Menu1";
import _Menu2 from "./component/Menu2";
import _Menu3 from "./component/Menu3";
import _Product from "./component/Product";
import _Cart from "./component/Cart";

import withLayout from "./layout/WithLayout";

const HomePage = withLayout(_HomePage);
const Menu1 = withLayout(_Menu1);
const Menu2 = withLayout(_Menu2);
const Menu3 = withLayout(_Menu3);
const Product = withLayout(_Product);
const Cart = withLayout(_Cart);
const Error = withLayout(_Error);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/menu1" component={Menu1} />
        <Route path="/menu2" component={Menu2} />
        <Route path="/menu3" component={Menu3} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
