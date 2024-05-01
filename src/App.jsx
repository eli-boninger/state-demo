import { useState } from "react";
import HomePage from "./HomePage";
import "../style/global.scss";

const App = () => {
  let isLoggedIn = false;

  function logIn() {
    isLoggedIn = true;
  }

  function logOut() {
    isLoggedIn = false;
  }

  return (
    <div className="app">
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <>
          <h2>This is an app.</h2>
          <button onClick={logIn}>Log in</button>
        </>
      )}

      {isLoggedIn && (
        <div>
          <a onClick={logOut}>Log out</a>
        </div>
      )}
    </div>
  );
};

export default App;
