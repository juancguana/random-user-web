import React from 'react';
import { Box, CircularProgress, Typography, Button, TextField } from '@material-ui/core';
import SingleUser from '../SingleUser';
import Modal from '../Modal';

const UserList = ({ onLoad, users, loading, error, onFilter }) => {
  return (
    <>
    <TextField label="Buscar"onChange={onFilter}/>
      {users.length == 0 ? (
        <Box align='center' height='100vh'>
          <Typography variant="h3">No se encotraron usuarios</Typography>
        </Box>
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
