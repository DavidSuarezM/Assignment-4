import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/dsLogo.png';

export default function Layout() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" height="100" width="100"></img>
        <h1> My Portfolio</h1>
      </header>

      <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <hr />

    </>

  );
}