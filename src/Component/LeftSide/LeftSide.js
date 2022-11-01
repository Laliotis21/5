import React from "react";
import RoutLinks from "../RouterLinks";
//import ParamsExample from '../RoutList2';

const leftside = props => {
  return (
    <div className="leftside nav nav-tabs flex-column">
      <RoutLinks />
    </div>
  );
};

export default leftside;
