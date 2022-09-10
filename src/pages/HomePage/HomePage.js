import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";
import api from "../../services/api";

import Row from "react-bootstrap/Row";

import PhotoCard from "../../components/Normal/PhotoCard/PhotoCard";
import Navbar from "../../components/Normal/Navbar/Navbar";
import HomeBanner from "../../components/Normal/HomeBanner/HomeBanner";

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
      <HomeBanner />
      <Row className={styles.row}>
        {photos.map((ph) => (
          <PhotoCard photo={ph} key={ph._id} />
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
