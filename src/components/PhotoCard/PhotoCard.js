import React from "react";

import styles from "./PhotoCard.module.css";

import Col from "react-bootstrap/Col";

const PhotoCard = (props) => {
  return (
    <Col xxl={4} lg={6} md={6} xs={12} className={styles.main}>
      <header>
        <img src={props.photo.url} className={styles.image} />
      </header>
      <main>
        <h2>{props.photo.title}</h2>
        <p>{props.photo.description}</p>
        <p>{props.photo.local}</p>
        <p>{props.photo.date}</p>
        <p>{props.photo.tags}</p>
      </main>
    </Col>
  );
};

export default PhotoCard;
