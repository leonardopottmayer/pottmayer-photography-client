import React, { useState, useEffect } from "react";

import styles from "./PhotosPage.module.css";

import api from "../../services/api";

import PhotoCard from "../../components/Normal/PhotoCard/PhotoCard";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Normal/Navbar/Navbar";

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
      <Row className={styles.row}>
        {photos.map((ph) => (
          <PhotoCard photo={ph} key={ph._id} />
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
