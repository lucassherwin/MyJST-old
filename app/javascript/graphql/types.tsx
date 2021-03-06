import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

/** Autogenerated input type of AddJob */
export type AddJobInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  company: Scalars['String'];
  contact: Scalars['String'];
  position: Scalars['String'];
  status: Scalars['String'];
};

/** Autogenerated return type of AddJob */
export type AddJobPayload = {
  __typename?: 'AddJobPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Scalars['String']>;
  job: Job;
};

/** Autogenerated input type of AddUser */
export type AddUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Autogenerated return type of AddUser */
export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Scalars['String']>;
  user: User;
};


export type Job = {
  __typename?: 'Job';
  company?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  position?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  userId?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addJob?: Maybe<AddJobPayload>;
  addUser?: Maybe<AddUserPayload>;
};


export type MutationAddJobArgs = {
  input: AddJobInput;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};

export type Query = {
  __typename?: 'Query';
  jobs: Array<Job>;
  tasks: Array<Task>;
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['ISO8601DateTime'];
  details?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  userId?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type Unnamed_1_MutationVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Mutation = (
  { __typename?: 'Mutation' }
  & { addJob?: Maybe<(
    { __typename?: 'AddJobPayload' }
    & Pick<AddJobPayload, 'errors'>
    & { job: (
      { __typename?: 'Job' }
      & Pick<Job, 'id' | 'company' | 'position' | 'status' | 'contact'>
    ) }
  )> }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);


export const Document = gql`
    mutation {
  addJob(
    input: {company: "Company 3", position: "position 3", status: "status 3", contact: "contact 3"}
  ) {
    job {
      id
      company
      position
      status
      contact
    }
    errors
  }
}
    `;
export type MutationFn = Apollo.MutationFunction<Mutation, MutationVariables>;

/**
 * __useMutation__
 *
 * To run a mutation, you first call `useMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutation, { data, loading, error }] = useMutation({
 *   variables: {
 *   },
 * });
 */
export function useMutation(baseOptions?: Apollo.MutationHookOptions<Mutation, MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Mutation, MutationVariables>(Document, options);
      }
export type MutationHookResult = ReturnType<typeof useMutation>;
export type MutationResult = Apollo.MutationResult<Mutation>;
export type MutationOptions = Apollo.BaseMutationOptions<Mutation, MutationVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  users {
    id
    username
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;