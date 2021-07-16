import React from 'react'

// create fake data for now
// this is the shape of the data from graphql
const data = {
  users: [
    {
      id: '1',
      first_name: 'Lucas',
      last_name: 'Sherwin', 
      email: 'test@test.com', 
      username: 'test_user', 
      password: 'test_pass'
    },
  ],
};

const loading = false;

const User: React.FunctionComponent = ({ id, first_name, last_name, email, username, password }) => {
  return <li>{username}</li>
}

const Users = () => {
  if (loading) {
    return <span>"Loading..."</span>
  }
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </ul>
    </div>
  )
}
export default Users