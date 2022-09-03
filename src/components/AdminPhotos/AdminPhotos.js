import React, { useEffect, useState } from "react";

import styles from "./AdminPhotos.module.css";

import api from "../../services/api";

import Navbar from "../../components/AdminNavbar/Navbar";

const AdminPhotos = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    await api.get("/posts/photo").then(({ data }) => {
      setPhotos(data.result);
      // console.log(data.result);
    });
  };

  useEffect(() => {
    fetchData();
    console.log(photos);
  }, []);

  return (
    <div className={styles.main}>
      <Navbar />
    </div>
  );
};

export default AdminPhotos;
