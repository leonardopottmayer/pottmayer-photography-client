import React from "react";

import styles from "./HomePage.module.css";

import Navbar from "../../components/Normal/Navbar/Navbar";
import HomeBanner from "../../components/Normal/HomeBanner/HomeBanner";
import About from "../../components/Normal/About/About";

const HomePage = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <HomeBanner />
      <About />
    </div>
  );
};

export default HomePage;
