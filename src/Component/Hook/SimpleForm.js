import React, { useState } from "react";
import { Content } from "../Home";
//import Content from './HookComponent';

const HookForm = () => {
  const [resource, setResource] = useState("todos");
  return (
    <div className="hookPart1">
      <div className="hookSimpleForm">
        <label>
          <input
            type="radio"
            onChange={e => setResource(e.target.value)}
            name="resources"
            defaultChecked
            value="todos"
          />
          Todos
        </label>
        <label>
          <input
            type="radio"
            onChange={e => setResource(e.target.value)}
            name="resources"
            value="photos"
          />
          Photos
        </label>
      </div>
      <div className="hookform">
        <Content resource={resource} />
      </div>
    </div>
  );
};

export default HookForm;
