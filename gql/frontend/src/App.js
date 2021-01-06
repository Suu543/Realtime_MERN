import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
})

const App = () => {

  const [posts, setPosts] = useState([]);

  client.query({
    query: gql`
      {
        allPosts {
          id
          title
          description
        }
      }
    `
  }).then(result => setPosts(result.data.allPosts));

  return (
    <div className="container p-5">
      <div className="row p-5">
        {posts.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>{p.title}</h4>
                  </div>
                  <p className="card-text">
                    {p.description}
                  </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
