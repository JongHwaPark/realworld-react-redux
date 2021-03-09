import React from "react";
import { Route, Switch } from 'react-router-dom'
import { Layout } from './Components/Layout';
import { Home } from './Components/Pages/Home';
import { Header } from './Components/Header';
import './App.css';

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>
  );
}

export default App;
