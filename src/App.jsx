import { useState } from "react";
import HomePage from "./HomePage";
import "../style/global.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <>
          <h2>This is an app.</h2>
          <button onClick={() => setIsLoggedIn(true)}>Log in</button>
        </>
      )}
    </div>
  );
};

export default App;
