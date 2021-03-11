import React from "react";
import { Route, Switch } from 'react-router-dom'
import { Layout } from './Components/Layout';
import { Home } from './Components/Pages/Home';
import { SignIn } from './Components/Pages/SignIn';
import { SignUp } from './Components/Pages/SignUp';
import { Header } from './Components/Header';
import './App.css';

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
      </Switch>
    </Layout>
  );
}

export default App;
