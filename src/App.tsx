import React from 'react';
import logo from './logo.svg';
import Helmet from "react-helmet";
import Navbar from "./core/components/navbar.component";
import {PublicRoutes} from "./public/public-routes";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="The main react page"/>
        <meta name="keywords" content="key, word"/>
      </Helmet>

      <Navbar links={PublicRoutes}/>

      <div style={{ height: "1000px" }}>
        Test
      </div>
    </React.Fragment>
  );
};

export default App;
