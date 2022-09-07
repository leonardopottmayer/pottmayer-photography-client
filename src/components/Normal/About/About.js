import React, { useState, useEffect } from "react";

import styles from "./About.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import vilaEncantada from "../../../assets/photography/vilaEncantada2.png";

const About = () => {
  const [age, setAge] = useState(19);

  useEffect(() => {
    let today = new Date();
    let myAge = today.getFullYear() - 2003;
    setAge(myAge);
  }, []);

  return (
    <Row className={styles.main}>
      <Col xxl={6} lg={6} md={6} xs={12} className={styles.col}>
        <img src={vilaEncantada} className={styles.image} />
      </Col>
      <Col xxl={6} lg={6} md={6} xs={12} className={styles.col}>
        <h1>Sobre mim</h1>

        <p>
          Meu nome é Leonardo, tenho {age} anos. E mey hobby é tirar umas fotos.
        </p>
      </Col>
    </Row>
  );
};

export default About;
