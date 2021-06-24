import React from 'react';
import { useParams } from 'react-router-dom';
import ItemUser from '../components/ItemUser';
import userList from '../data';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '24px 8px',
    height: '70vh',
  },
});

const User = () => {
  const { id } = useParams();
  const singleUser = userList.find((user) => user.id === id);

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <ItemUser user={singleUser} />
    </Box>
  );
};

export default User;
