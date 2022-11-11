import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";
import api from "../../services/api";
import pottmayerDevApi from "../../services/pottmayerDevApi";

import Row from "react-bootstrap/Row";

import PostCard from "../../components/Normal/PostCard/PostCard";
import Navbar from "../../components/Normal/Navbar/Navbar";
import HomeBanner from "../../components/Normal/HomeBanner/HomeBanner";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchApi = async () => {
      setShowLoading(true);

      const response = await api.get("/posts/all");

      if (!ignore) {
        const projectAccessPostResponse = await pottmayerDevApi.post(
          "/projectsAccess/d",
          {
            projectName: "Pottmayer Photography",
          }
        );
      }

      setShowLoading(false);

      if (response.data.result) {
        setPosts(response.data.result);
      }
    };

    fetchApi();

    return () => {
      ignore = true;
    };
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
