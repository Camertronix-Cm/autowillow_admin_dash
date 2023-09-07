import { Avatar } from "@nextui-org/react";
import React, { Component } from "react";
import { BsThreeDots } from "react-icons/bs";
import {UserHead} from "./user-head";

export const Header = () => {
  
    return (
      <div className="flex flex-row w-full justify-between justify-items-start pr-5 pl-5 pt-3">
        <UserHead/>
        <div>
          <BsThreeDots />
        </div>
      </div>
    );
  }
 
