import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserListView from '../view/UserList';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );
        const { results } = response.data;
        setUsers([...users,...results]);
      } catch (error) {
        setLoading(true);
        setError(error.message);
      }
      setLoading(false);
    };
    getData();
  }, [page]);

  const handleLoad = () => {
    setPage(page + 1);
  };

  return (
    <UserListView
      users={users}
      loading={loading}
      error={error}
      onLoad={handleLoad}
    />
  );
};

export default UserList;
