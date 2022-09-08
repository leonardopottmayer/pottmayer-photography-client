import React from "react";
import moment from "moment";

import styles from "./PhotoCard.module.css";

import Col from "react-bootstrap/Col";

const PhotoCard = (props) => {
  return (
    <Col xxl={3} lg={4} md={6} xs={12} className={styles.main}>
      <div className={styles.card}>
        <header>
          <img src={props.photo.url} className={styles.image} />
        </header>
        <div className={styles.body}>
          <h2 className={styles.title}>{props.photo.title}</h2>
          <p className={`${styles.item} ${styles.inline_item}`}>
            {moment(props.photo.date).format("DD/MM/YYYY").toString()} -{" "}
            {props.photo.local}
          </p>
          <p className={styles.item}>{props.photo.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default PhotoCard;
