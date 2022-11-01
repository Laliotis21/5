import React from "react";
import RoutLinks from "../RouterLinks";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const header = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <RoutLinks className="dashbordmenu" />
        </div>
      </div>
    </div>
  );
};

export default header;
