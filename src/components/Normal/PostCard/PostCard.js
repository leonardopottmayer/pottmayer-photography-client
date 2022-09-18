import React from "react";
import moment from "moment";

import "animate.css";

import styles from "./PostCard.module.css";

import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const PostCard = (props) => {
  return (
    <Col
      xxl={3}
      lg={4}
      md={6}
      xs={12}
      className={`animate__animated animate__fadeIn ${styles.main}`}
    >
      <div className={styles.card}>
        <header>
          {/* <img src={props.photo.url} className={styles.image} /> */}
          {props.post.photos.length > 0 && (
            <Carousel
              fade
              interval={3600000}
              controls={props.post.photos.length > 1 ? true : false}
              indicators={props.post.photos.length > 1 ? true : false}
            >
              {props.post.photos.map((photo) => (
                <Carousel.Item key={photo._id}>
                  <img
                    className="d-block w-100"
                    src={photo.url}
                    alt="First slide"
                  />
                  {/* <Carousel.Caption>
                  <h3 className={styles.title}>{props.post.local}</h3>
                  <p className={styles.description}>
                    {props.post.description}
                  </p>
                </Carousel.Caption> */}
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </header>
        <div className={styles.body}>
          {/* <h2 className={styles.title}>{props.photo.title}</h2> */}

          <p className={styles.item}>📍 {props.post.local}</p>
          <p className={styles.date}>
            {moment(props.post.date).format("DD/MM/YYYY").toString()}
          </p>
          <p className={styles.description}>{props.post.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default PostCard;
