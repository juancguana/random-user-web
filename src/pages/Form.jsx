import React, { useState } from 'react';
import ItemUser from '../components/ItemUser';
import UserForm from '../components/UserForm';
import Title from '../components/Title';

const Form = () => {
  const initialState = {
    name: '',
    country: '',
    email: '',
    telefono: '',
  };

  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Title text='Ingresa tu propio usuario' />
      <br />
      <ItemUser user={user} />
      <br />
      <UserForm onChange={handleChange} user={user} />
    </>
  );
};

export default Form;
