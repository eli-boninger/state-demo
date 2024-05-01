import { useState } from "react";
import HomePage from "./HomePage";
import "../style/global.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div class="app">
      {isLoggedIn ? (
        <HomePage user={user} />
      ) : (
        <>
          <h2>This is an app.</h2>
          <button onClick={() => setIsLoggedIn(true)}>Log in</button>
        </>
      )}
      {isLoggedIn && (
        <div>
          <a onClick={() => setIsLoggedIn(false)}>Log out</a>
        </div>
      )}
    </div>
  );
};

export default App;
