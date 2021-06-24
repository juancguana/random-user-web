import React, { Component } from 'react';
import userList from '../data';
import Title from '../components/Title';
import ItemUser from '../components/ItemUser';

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userList,
    };
  }
  render() {
    return (
      <>
        <Title text='Lista de usuarios' />
        {this.state.users.map((item, index) => (
          <ItemUser key={index} user={item} />
        ))}
      </>
    );
  }
}

export default List;
