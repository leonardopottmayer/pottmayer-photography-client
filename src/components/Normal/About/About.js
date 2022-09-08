import React, { useState, useEffect } from "react";

import "animate.css";

import styles from "./About.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import leonardoProfileImage from "../../../assets/photography/leonardo.jpg";

const About = () => {
  const [age, setAge] = useState(19);

  useEffect(() => {
    let today = new Date();
    let myAge = today.getFullYear() - 2003;
    setAge(myAge);
  }, []);

  return (
    <Row className={styles.main}>
      <Col
        xxl={6}
        lg={6}
        md={6}
        xs={12}
        className={`${styles.col_left} ${styles.col}`}
      >
        <img
          src={leonardoProfileImage}
          className={`animate__animated animate__fadeIn ${styles.image}`}
        />
      </Col>
      <Col xxl={6} lg={6} md={6} xs={12} className={styles.col}>
        <div className={styles.about_description_container}>
          
          <h1 className={`animate__animated animate__fadeIn ${styles.title}`}>
            Sobre mim
          </h1>

          <p
            className={`animate__animated animate__fadeIn ${styles.paragraph}`}
          >
            Meu nome é Leonardo, tenho {age} anos. E gosto de tirar umas fotos.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default About;
