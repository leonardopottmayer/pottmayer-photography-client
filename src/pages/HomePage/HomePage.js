import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";

import api from "../../services/api";

import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { Row } from "react-bootstrap";

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
      <Row className={styles.row}>
        {photos.map((ph) => (
          // <li key={ph._id}>{ph.title} </li>
          <PhotoCard photo={ph} key={ph._id} />
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
