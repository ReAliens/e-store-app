import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import client from './Client';

import AppRoutes from './routes/routes';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <AppRoutes />
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
