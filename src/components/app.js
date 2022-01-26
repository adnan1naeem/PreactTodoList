import { Router } from "preact-router";
import { Provider } from "react-redux";
import Header from "./header";
import store from "../redux/store";
import Home from "../routes/home";
import Profile from "../routes/profile";

/**
 *  Todo LIST App with Redux
 *
 */
const App = () => (
  <Provider store={store}>
    <Header />
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
  </Provider>
);

export default App;
