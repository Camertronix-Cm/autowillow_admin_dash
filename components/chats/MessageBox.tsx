import React, { Component } from "react";
import Header from "./Header";
import Form from "./messageInputSection";

export default class MessageBox extends Component {
  render() {
    return (
      <div className="flex  flex-col  border border-indigo-600 	 h-full">
        <Header />
        <div className=" "></div>
        <Form />
      </div>
    );
  }
}
