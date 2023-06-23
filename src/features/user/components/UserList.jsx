import React from "react";
import { Box, Grid } from "@material-ui/core";
import { UserItem } from "./user-item/UserItem";
import { useNavigate } from "react-router-dom";

export const UserList = ({ data }) => {
  const navigate = useNavigate();

  const handleClickUserPage = (user) => {
    navigate(`/user/${user.id}`);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={3} onClick={() => handleClickUserPage(user)}>
            <UserItem user={user}  />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
