import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import SingleUser from './SingleUser';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://randomuser.me/api/?results=10'
        );
        const { results } = response.data;
        setUsers(results);
        console.log(response);
      } catch (error) {
        setLoading(true);
        setError(error.message);
      }
      setLoading(false);
    };
    getData();
  }, []);

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
