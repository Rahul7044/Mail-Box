import { useSelector } from "react-redux";
import "./App.css";
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login";
import Home from "./components/pages/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Compose from "./components/Mail/Compose";
import InboxPage from "./components/Mail/InboxPage";
import About from "./components/pages/About";

function App() {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLogin);
  return (
    <>
      <Layout>
        <Switch>
          {!isLogin && (
            <Route path="/" exact>
              <Redirect to="login" />
            </Route>
          )}

          {!isLogin && (
            <Route path="/login">
              <Login />
            </Route>
          )}

          {!isLogin && (
            <Route path="/register">
              <Registration />
            </Route>
          )}
          {isLogin && (
            <Route path="/home">
              <Home />
            </Route>
          )}

          {!isLogin && (
            <Route path="*">
              <Redirect to="/login" />
              <Login />
            </Route>
          )}
          {isLogin && (
            <Route path="*">
              <Redirect to="/home" />
              <Home />
            </Route>
          )}
          {isLogin && (
            <Route path="/email">
              <InboxPage />
              </Route>
          )}
          {isLogin && (
            <Route path="/about">
              <About />
            </Route>
          )}
        </Switch>
      </Layout>
    </>
  );
}
export default App;