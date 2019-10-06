import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { setAccessToken } from "./accessToken";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async res => {
      const data = await res.json();
      console.log(data);
      await setAccessToken(data.accessToken);
      await setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <Routes />;
};

export default App;
