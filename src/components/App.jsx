import React from 'react'
import Title from './Title'
import ItemUser from './ItemUser'

const data = {
  name: 'Juan Guana',
  coutry: 'Ecuador',
  email: 'juan@prueba.com',
};

const App = () => {
  return (
    <>
      <Title text="Lista de usuarios"/>
      <ItemUser user={data}/>
    </>
  )
}

export default App
