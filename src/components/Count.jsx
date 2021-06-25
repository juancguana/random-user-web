import React from 'react';
import { useCounter } from '../hooks/useCounter';
import './styles/UserCount.css';

const Count = () => {
  
  const {count, handleAdd, handleSubstract} = useCounter(100);

  return (
    <div className='count'>
      <h2>Contador de usuarios</h2>
      <h3>{count}</h3>
      <button onClick={() => handleAdd(10)}>Aumentar</button>
      <button onClick={() => handleSubstract(10)}>Disminuir</button>
    </div>
  );
};

export default Count;
