import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </div>
    </Router>
  );
}

export default App;
