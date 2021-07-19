import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'

const csrfToken = document
  .querySelector('meta[name=csrf-token]')
  .getAttribute('content')

  const client = new ApolloClient({ // client is how Apollo is configured to connect to the api
  link: new HttpLink({ // makes requests to /graphql
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken, // prevents users from making requests through our graphql api
    },
  }),
  cache: new InMemoryCache(),
})

export const withProvider = (
  WrappedComponent: React.ComponentType,
  props: any = {},
  ) => () => {
  return ( // this allows the WrappedComponent to make calls to the graphql api
    <ApolloProvider client={client}>
      <WrappedComponent {...props} />
    </ApolloProvider>
  )
}