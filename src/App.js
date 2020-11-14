import './App.css';
import React from 'react';
import GetLaunches from './Launches'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = ...

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <GetLaunches />
      </div>
          
    </ApolloProvider>
  );
}

export default App;
