import './App.css';
import './styles/main.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import TopNav from "./TopNav.js";


function App() {
  return (
    <Router>
      <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <TopNav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;