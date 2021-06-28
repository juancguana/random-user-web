import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import SingleUser from '../SingleUser';
import Modal from '../Modal';

const UserList = ({ users, loading, error }) => {
  return (
    <>
      {loading ? (
        <Box align='center' height='100vh'></Box>
      ) : (
        <Box height='100%'>
          {users.map((item, index) => (
            <SingleUser key={index} {...item} />
          ))}
        </Box>
      )}
      {error && <Typography align='center'>{error}</Typography>}
      {loading && (
        <Modal>
          <CircularProgress color='secondary' />
        </Modal>
      )}
    </>
  );
};

export default UserList;
