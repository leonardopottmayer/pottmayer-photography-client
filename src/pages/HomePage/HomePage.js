import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";

import api from "../../services/api";

import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "react-bootstrap/Carousel";

import sunrisePottmayerPhoto from "../../assets/bannerImages/sunrise_pottmayer.jpg";
import seaPottmayerPhoto from "../../assets/bannerImages/sea_pottmayer.jpg";
import enchantPottmayerPhoto from "../../assets/bannerImages/enchant_pottmayer.jpg";

const HomePage = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    await api.get("/posts/photo").then(({ data }) => {
      setPhotos(data.result);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <Navbar />
      <Carousel className={styles.carousel}>
        <Carousel.Item className={styles.carousel_item}>
          <img
            className={`${styles.carousel_item_img}`}
            src={sunrisePottmayerPhoto}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel_item}>
          <img
            className={`${styles.carousel_item_img}`}
            src={seaPottmayerPhoto}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel_item}>
          <img
            className={`${styles.carousel_item_img}`}
            src={enchantPottmayerPhoto}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid>
        <Row className={styles.row}>
          {photos.map((ph) => (
            // <li key={ph._id}>{ph.title} </li>
            <PhotoCard photo={ph} key={ph._id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
