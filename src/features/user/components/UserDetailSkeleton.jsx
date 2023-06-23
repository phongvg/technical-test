import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const UserDetailSkeleton = () => {
  return (
    <Box>
      <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={100} />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Box>
          </Grid>
      </Grid>
    </Box>
  );
};
