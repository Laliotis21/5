import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { anotherName, addWish } from "./Redux/reduxTwo";
import Hook from "./Hook/HookComponent";
import HookForm from "./Hook/SimpleForm";
import axios from "axios";
import ChatApp from "./Chat/chatApp";

const Home = () => {
  return (
    <div className="homepage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron card card-block">
              <h1>
                <center>Welcome To ReactJS Hook.</center>
              </h1>
            </div>
          </div>
          <div className="clear" />
          <div className="col-md-6">
            <h3>React Hook : One (P) </h3>
            <div className="jumbotron card card-block">
              <Hook />
            </div>
          </div>
          <div className="col-md-6">
            <h3>React Hook : Two (P) </h3>
            <div className="jumbotron card card-block">
              <HookForm />
            </div>
          </div>
          <div className="col-md-6">
            <h3>React Hook : Three (P) </h3>
            <div className="jumbotron card card-block">
              <ChatApp />
            </div>
          </div>
          <div className="col-md-6">
            <h3>React Hook : Four (P) </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Content = props => {
  const [data, setState] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${props.resource}`)
      .then(({ data }) => {
        setState(data);
      });
  }, [props.resource]);

  //const [data, setState] = useState(null)
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};
const mapStateToProps = state => {
  return {
    myname: state.name,
    mywish: state.wish
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch(anotherName(name));
    },
    addWish: () => {
      dispatch(addWish());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
