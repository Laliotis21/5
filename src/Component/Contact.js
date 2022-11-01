import React from "react";
import ReactDOM from "react-dom";
import Form from "./ContentArea/form";

function Contact() {
  return (
    <div className="homepage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
//ReactDOM.render(<Form  />, document.getElementById('contactform'));
export default Contact;
