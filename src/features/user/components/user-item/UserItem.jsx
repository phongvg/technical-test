import React from "react";
import { Box, Typography } from "@material-ui/core";
import { BASE_URL } from "../../../../config/environment";
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import "./UserItem.css";

export const UserItem = ({ user }) => {
  return (
    <Box padding={1} className="user-box">
      <div className="user-profile d-flex">
        <img alt={user.id} src={`${BASE_URL}${user.profile_picture_url}`} className="user-avatar"/>
        <Typography className="mt-2">{user.first_name} {user.last_name}</Typography>
      </div>
      <div className="user-description d-flex">
        <Typography variant="body2"><WorkIcon/> {user.employment.title}</Typography>
        <Typography variant="body2"><EmailIcon/> {user.email}</Typography>
        <Typography variant="body2"><CalendarTodayIcon/> {user.date_of_birth}</Typography>
      </div>
    </Box>
  );
};
