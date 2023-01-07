
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Items } from './components/Items';
import { IamSeparate } from "./components/IamSeparate";
import { Header } from "./components/Header";
import "./App.css";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App" role="main">
        <Header />
        <div className="main-body">
          <Items />
          <IamSeparate />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
