import React from "react";

import styles from "./HomeBanner.module.css";

import moonBanner from "../../../assets/banners/moonBanner.png";

const HomeBanner = () => {
  return (
    <div className={styles.main}>
      <img src={moonBanner} className={styles.image} />
    </div>
  );
};

export default HomeBanner;
