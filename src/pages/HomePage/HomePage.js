import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";
import api from "../../services/api";

import Row from "react-bootstrap/Row";

import PostCard from "../../components/Normal/PostCard/PostCard";
import Navbar from "../../components/Normal/Navbar/Navbar";
import HomeBanner from "../../components/Normal/HomeBanner/HomeBanner";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  const fetchData = async () => {
    setShowLoading(true);
    await api.get("/posts/all").then(({ data }) => {
      setPosts(data.result);
    });
    setShowLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <Navbar />
      <HomeBanner />
      {showLoading ? (
        <Loading />
      ) : (
        <Row className={styles.row}>
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
