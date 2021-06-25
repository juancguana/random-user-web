import React, { useState } from 'react';
import userList from '../data';
import Title from '../components/Title';
import ItemUser from '../components/ItemUser';

const List = () => {
  const [users, setUsers] = useState(userList);

  return (
    <>
      <Title text='Lista de usuarios' />
      {users.map((item, index) => (
        <ItemUser key={index} user={item} />
      ))}
    </>
  );
};

export default List;
