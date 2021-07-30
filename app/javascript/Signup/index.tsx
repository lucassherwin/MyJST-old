import React, { useState } from 'react';
import gql from 'graphql-tag';
import { withProvider } from '../graphqlProvider';
import { useQuery } from '@apollo/client';
// import { addUser } from './signUpQueries';

const Signup = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addAccount = (event) => {
    event.preventDefault();

    const addUser = gql`
  mutation {
    addUser(input: {
    firstName: "Added",
    lastName: "User",
    email: "addedUserEmail@email.com",
    username: "addedUsername",
    password: "addedPassword"
    }) {
      user {
        id,
        firstName,
      lastName,
      email,
      username,
      password
      }
      errors
    }
  }
`;
    console.log('before query', first, last, username, email, password);

    const { data, loading, error } = useQuery(addUser);
    console.log(data);
  };

  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={addAccount}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">First Name</label>
            <input onChange={(event) => setFirst(event.target.value)} value={first} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> SORT THESE OUT LATER */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">Last Name</label>
            <input onChange={(event) => setLast(event.target.value)} value={last} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">Username</label>
            <input onChange={(event) => setUsername(event.target.value)} value={username} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="username" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">Email</label>
            <input onChange={(event) => setEmail(event.target.value)} value={email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="example@email.com" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
            <input onChange={(event) => setPassword(event.target.value)} value={password} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
      </form>
    </div>
  );
}

export default withProvider(Signup);