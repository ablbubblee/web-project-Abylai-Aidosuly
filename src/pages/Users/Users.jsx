
import React from 'react';
import UserCard from '../../components/UserCard'

const Users = () => {

  const users = [
    { id: 1, name: 'John Doe', email: 'john@doe.com', age: 19, img: '1.webp' },
    { id: 2, name: 'Jane Doe', email: 'jane@doe.com', age: 19, img: '2.jpg' },
    { id: 3, name: 'Bob Smith', email: 'john@doe.com', age: 19, img: '3.jpg' },

  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Users</h2>
      <div className="row">
          {users && users.map(user => (
            <UserCard data={user} />
          ))}
      </div>


    </div>
  );
};

export default Users;
