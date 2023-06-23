import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as userAPI from "../../../../services/user";
import { UserItem } from "../user-item/UserItem";
import { UserDetailSkeleton } from "../UserDetailSkeleton";
import { NotFound } from "../../../../shared/components/not-found/NotFound";
import { Grid } from "@material-ui/core";
import "./UserDetail.css";
import { CustomButton } from "../../../../shared/components/CustomButton";
import { useNavigate } from "react-router-dom";

export const UserDetail = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const getUser = async (id) => {
    try {
      const res = await userAPI.getUser(id);
      if (res) {
        setUser(res);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnClick = () => {
    navigate("/");
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <UserDetailSkeleton />
      ) : error ? (
        <NotFound />
      ) : (
        <Grid container>
          <Grid item className="user-detail pt-4">
            <UserItem user={user} />
            <CustomButton text="Go Back" onClick={() => handleOnClick()} className="mt-4" />
          </Grid>
        </Grid>
      )}
    </>
  );
};
