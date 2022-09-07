import React, { useState, useEffect } from "react";

import styles from "./PhotosPage.module.css";

import api from "../../services/api";

import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "../../components/Navbar/Navbar";
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
    </div>
  );
};

export default HomePage;
