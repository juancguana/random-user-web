import React from 'react';
import { Box, CircularProgress, Typography, Button } from '@material-ui/core';
import SingleUser from '../SingleUser';
import Modal from '../Modal';

const UserList = ({ onLoad, users, loading, error }) => {
  return (
    <>
      {loading ? (
        <Box align='center' height='100vh'></Box>
      ) : (
        <Box height='100%'>
          {users.map((item, index) => (
            <SingleUser key={index} {...item} />
          ))}
          <Box align="center">
            <Button variant='contained' color='secondary' onClick={onLoad}>
              Cargar más
            </Button>
          </Box>
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
