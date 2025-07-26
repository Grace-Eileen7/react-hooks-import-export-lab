import React from "react";
export default Home;
import { username, city } from "./../data/user.js";
function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
