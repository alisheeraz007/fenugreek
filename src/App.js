import './App.css';
import Home from './home';
import ThankyouPage from './Thankyou';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1612948509060745');
        if(window.location.pathname === "/jazba" || window.location.pathname === "/"){
          ReactPixel.pageView();
        }else if(window.location.pathname === "/thankyou"){
          ReactPixel.track("Lead")
        }
      });
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/jazba" component={Home} />
          <Route path="/thankyou" component={ThankyouPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
