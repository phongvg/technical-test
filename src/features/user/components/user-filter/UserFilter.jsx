import React, { useState } from "react";
import { Box } from "@material-ui/core"
import { TextField } from "@mui/material";
import { CustomButton } from "../../../../shared/components/CustomButton";


export const UserFilter = ({ setFilter }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleSearchButton = () => {
    setFilter(inputSearch);
  };

  const handleClearButton = () => {
    setInputSearch("");
    setFilter("");
  };

  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => setInputSearch(e.target.value.toLocaleLowerCase())}
        value={inputSearch}
        size="small"
      />
      <CustomButton text="Searh" onClick={()=>handleSearchButton()} className="search-btn" />
      <CustomButton text="Clear" onClick={()=>handleClearButton()} className="clear-btn"/>
    </Box>
  );
};
