import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";
import api from "../../services/api";

import Row from "react-bootstrap/Row";

import PostCard from "../../components/Normal/PostCard/PostCard";
import Navbar from "../../components/Normal/Navbar/Navbar";
import HomeBanner from "../../components/Normal/HomeBanner/HomeBanner";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    await api.get("/posts/all").then(({ data }) => {
      setPosts(data.result);
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
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
