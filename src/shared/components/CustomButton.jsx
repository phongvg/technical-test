import React from "react";
import { Button } from "@material-ui/core";
export const CustomButton = ({ text, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};
