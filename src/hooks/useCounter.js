import { useState } from 'react';

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);

  const handleAdd = (factor) => {
    setCount(count + factor);
  };

  const handleSubstract = (factor) => {
    setCount(count - factor);
  };

  return {
    count,
    handleAdd,
    handleSubstract
  }

};
