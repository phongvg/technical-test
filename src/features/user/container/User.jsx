import React, { useEffect, useState } from "react";
import { Container, Box, Grid } from "@material-ui/core";
import * as userAPI from "../../../services/user";
import { UserSkeletonList } from "../components/UserSkeletonList";
import { UserList } from "../components/UserList";

import "./User.css";
import { UserFilter } from "../components/user-filter/UserFilter";

export const User = () => {
  const [userList, setUserList] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({});

  const getAllUsers = async () => {
    try {
      const res = await userAPI.getAllUsers();
      if (res) {
        setUserList(res);
        setFilteredUser(res);
      }
      setLoading(false);
    } catch (error) {
      console.log("failed to fetch user list:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    let filteredData = [...userList];
    if (filter.length > 0) {
      filteredData = filteredData.filter((user) => {
        return (
          user.first_name.toLowerCase().includes(filter) ||
          user.last_name.toLowerCase().includes(filter)
        );
      });
    }
    setFilteredUser(filteredData);
  }, [userList, filter]);

  return (
    <Box>
      <Container>
        <Grid container spacing={2} className="mt-4 top-bar d-flex">
          <Grid item>
            <h4>{filteredUser?.length} employees were found</h4>
          </Grid>
          <Grid item>
            <UserFilter setFilter={setFilter} />
          </Grid>
        </Grid>
        {loading ? <UserSkeletonList /> : <UserList data={filteredUser} />}
      </Container>
    </Box>
  );
};
