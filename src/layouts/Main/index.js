import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = ({ children }) => {
  let location = useLocation();

  return (
    <Fragment>
      <Header>
        <Link to="/" className="logo">
          <span className="logo-mini">
            <b>A</b>LT
          </span>
          <span className="logo-lg">
            <b>Admin</b>Lite
          </span>
        </Link>

        <Navbar />
      </Header>

      <Sidebar>
        <li className="header">MAIN NAVIGATION</li>

        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <i className="fa fa-rocket"></i>
            <span>Home</span>
          </Link>
        </li>

        <li className={location.pathname === '/todos' ? 'active' : ''}>
          <Link to="/todos">
            <i className="fa fa-tasks"></i>
            <span>Todos</span>
          </Link>
        </li>

        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">
            <i className="fa fa-beer"></i>
            <span>About</span>
          </Link>
        </li>
      </Sidebar>

      <div className="content-wrapper">{children}</div>

      <Footer />
    </Fragment>
  );
};

export default Main;
