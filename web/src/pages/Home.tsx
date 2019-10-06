import React from "react";
import { useUsersQuery } from "../generated/graphql";
import { getAccessToken } from "../accessToken";

const Home = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {getAccessToken()}
        <div>Users:</div>
        <ul>
          {data.users.map(x => {
            return (
              <li key={x.id}>
                {x.id}: {x.email}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Home;
