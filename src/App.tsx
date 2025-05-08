import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CryptoTable } from './components/crypto/CryptoTable';
import { cryptoWebSocket } from './services/websocket';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 30px;
  text-align: center;
`;

const Title = styled.h1`
  color: #1a1a1a;
  font-size: 2.5rem;
  margin: 0;
`;

const App: React.FC = () => {
  useEffect(() => {
    // Connect to websocket when component mounts
    cryptoWebSocket.connect();

    // Disconnect when component unmounts
    return () => {
      cryptoWebSocket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <AppContainer>
        <Header>
          <Title>Crypto Price Tracker</Title>
        </Header>
        <CryptoTable />
      </AppContainer>
    </Provider>
  );
};

export default App;
