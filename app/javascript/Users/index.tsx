import React from 'react';
import gql from 'graphql-tag';
// import { useQuery } from '@apollo/client';
import { withProvider } from '../graphqlProvider';
import { useAllUsersQuery } from '../graphql/types';


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
  const { data, loading, error } = useAllUsersQuery(usersQuery);

  if (loading) {
    return <span>"Loading..."</span>;
  }

  return (
    <div>
      {/* <h1>Users</h1>
      <ul>
        {data.users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </ul> */}
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt="" />
          <div className="text-center sm:text-left sm:flex-grow">
            <div className="mb-4">
              <p className="text-xl leading-tight">Adam Wathan</p>
              <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
            </div>
            <div>
              <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <span className="block">1</span>
        <span className="block">2</span>
        <span className="block">3</span>
      </div>
    </div>
  )
};

export default withProvider(Users); // gives Users component access to the Apollo client