import React, { Component } from "react";
import {Header} from "./Header";
import Form from "./messageInputSection";

export const MessageBox = () => {
 
    return (
      <div className="flex  flex-col  border border-indigo-600 	 h-full basis-3/4">
        <Header />
        <div className="h-full "></div>
        <Form />
      </div>
    );
 
}
