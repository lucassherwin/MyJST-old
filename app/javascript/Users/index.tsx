import React from 'react';
import gql from 'graphql-tag';
import { withProvider } from '../graphqlProvider';
import { useQuery } from '@apollo/client';
// import { useAllUsersQuery } from '../graphql/types';


// define query
// only getting username for now
const usersQuery = gql`
  query allUsers {
    users {
      id
      username
    }
  }
`;

const loading = false;

const User: React.FunctionComponent = ({ username }) => {
  return <li>{username}</li>;
};

const Users = () => {
  const { data, loading, error } = useQuery(usersQuery);

  if (loading) {
    return <span>"Loading..."</span>;
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
};

export default withProvider(Users); // gives Users component access to the Apollo client