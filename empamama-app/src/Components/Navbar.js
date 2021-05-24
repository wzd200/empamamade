import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import { useHistory } from "react-router-dom";
//test
export default function NavBar() {
    const history = useHistory();
    const routeToMenu = () => {
      history.push("/Home")
    }

    return (
        <div>
          <nav>
            <div className='nameHeader'>
              <h1 
              onClick={routeToMenu}
              >Empamama's</h1>
            </div>
            <div className='linksHeader'>
              <Link to="/Home">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Menu">Menu</Link>
              <Link to="/Contact">Contact</Link>
            </div>
          </nav>
    
          <Switch>
            <Route path={'/Home'}>
                <Home />
            </Route>
            <Route path={'/About'}>
                <About />
            </Route>
            <Route path={'/Menu'}>
                <Menu />
            </Route>
            <Route path={'/Contact'}>
                <Contact />
            </Route>
            <Route path={'/'}>
                <Home />
            </Route>
          </Switch>
        </div>
      );
}