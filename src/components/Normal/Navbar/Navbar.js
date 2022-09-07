import React from "react";
import { Link } from "react-router-dom";

import logoPhotography from "../../../assets/logos/logo_photography.png";

import styles from "./Navbar.module.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Navbar className={styles.navbar_main} variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt="Logo"
          src={logoPhotography}
          width="30"
          height="30"
          className={styles.nav_brand_logo}
        />
        Pottmayer Photography
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className={styles.nav_link} to="/">
            Home
          </Link>
          <Link className={styles.nav_link} to="/photos">
            Photos
          </Link>
          <a
            className={styles.nav_link}
            target="_blank"
            href="https://www.pottmayer.dev"
          >
            Dev
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
