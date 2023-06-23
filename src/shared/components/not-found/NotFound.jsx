import React from "react";
import { Container } from "@material-ui/core";

import "./NotFound.css"
import {CustomButton} from "../CustomButton";
import { useNavigate } from "react-router-dom";


export const NotFound = () => {
  const navigate = useNavigate();

  const handleOnClick = () =>{
    navigate("/");
  }
  return (
    <Container>
      <div className="not-found">
        <h1>Error 404</h1>
        <CustomButton  text="Go back" onClick={()=>handleOnClick()} />
      </div>
    </Container>
  );
};
