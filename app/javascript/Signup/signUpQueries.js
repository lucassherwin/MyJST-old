import gql from 'graphql-tag';

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

export { addUser };