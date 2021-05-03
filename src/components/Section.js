import React, { useContext } from "react";
import Home from "./section/Home";
import Login from "./section/Login";
import Interna from "./section/Interna";
import { Route } from "react-router-dom";
import { DataContext } from "./Context";

function Section() {
  const { auth } = useContext(DataContext);

  return (
    <section>
      <Route exact path="/" component={Login} />
      {auth && <Route exact path="/home" component={Home} />}
      {auth && <Route exact path="/interna/" component={Interna} />}
    </section>
  );
}

export default Section;
