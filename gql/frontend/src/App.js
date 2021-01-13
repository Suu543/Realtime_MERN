import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, gql, useQuery, ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CompleteRegistration from "./pages/auth/CompleteRegistration";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <Nav />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/complete-registration" component={CompleteRegistration} />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
