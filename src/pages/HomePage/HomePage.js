import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";

import api from "../../services/api";

// import Credits from "../../components/Credits/Credits";

const HomePage = () => {
  //   const [phrase, setPhrase] = useState(null);

  //   const fetchApi = async () => {
  //     const response = await api.get("phrase/randomPhrase");

  //     if (response.data.result) {
  //       setPhrase(response.data.result);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchApi();
  //   }, []);

  return (
    <div className={styles.main}>
      {/* {phrase && <PhraseComp phrase={phrase} />} */}
      {/* <Credits /> */}
    </div>
  );
};

export default HomePage;
