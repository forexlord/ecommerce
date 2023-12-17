import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        //user is logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        //setting user back to default to log out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
