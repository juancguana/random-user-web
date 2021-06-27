import React, { useState, useEffect } from 'react';
import ItemUser from '../components/ItemUser';
import UserForm from '../components/UserForm';
import Title from '../components/Title';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const initialState = {
    name: '',
    country: '',
    email: '',
    telefono: '',
  };
  const [user, setUser] = useState(initialState);
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      const { data } = response;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Title text='Edita un usuario' />
      <br />
      <ItemUser user={user} />
      <br />
      <UserForm onChange={handleChange} user={user} isEdit/>
    </>
  );
};

export default Edit;
