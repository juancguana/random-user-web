import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserListView from '../view/UserList';

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

  return <UserListView users={users} loading={loading} error={error} />;
};

export default UserList;
