import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import routes from './config/routes';


//import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} route={route} />
        ))}
      </Routes>
    </Router>
  );
}
 
function RouteWithSubRoutes(route) {
  return(
    <Route 
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;

