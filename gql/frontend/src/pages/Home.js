import React, { useState } from 'react';
import { gql, useQuery, useLazyQuery } from "@apollo/client"

const GET_ALL_POSTS = gql`
    {
        allPosts {
            id
            title
            description
        }
    }
`;

const Home = () => {
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS);

  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  if (loading) return <p className="p-5">Loading...</p>

 
  return (
    <div className="container p-5">
      <div className="row p-5">
        {data.allPosts.map((p) => (
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
      <div className="row p-5">
        <button onClick={() => fetchPosts()} className="btn-btn-raised btn-primary">
          Fetch Posts
        </button>
      </div>
      <hr />
      {JSON.stringify(posts)}
    </div>
  );
}

export default Home;
