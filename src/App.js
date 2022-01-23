import { ApolloProvider } from '@apollo/client';
import client from './Client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello E-Store</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
