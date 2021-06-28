import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import SingleUser from '../SingleUser';

const UserList = ({users, loading, error}) => {

  return (
    <>
      {loading ? (
        <Box align='center' height="100vh">
          <CircularProgress color='secondary' />
        </Box>
      ) : (
        <Box height="100%">
          {users.map((item, index) => (
            <SingleUser key={index} {...item} />
          ))}
        </Box>
      )}
      {error && <Typography align="center">{error}</Typography> }
    </>
  );
};

export default UserList;
