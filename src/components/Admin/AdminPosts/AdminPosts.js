import React, { useEffect, useState } from "react";

import styles from "./AdminPosts.module.css";
import api from "../../../services/api";

import Navbar from "../Navbar/Navbar";
import Row from "react-bootstrap/Row";
import PostCard from "../PostCard/PostCard";
import SelectedPostModal from "../SelectedPostModal/SelectedPostModal";
import CreatePostModal from "../CreatePostModal/CreatePostModal";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    await api.get("/posts/all").then(({ data }) => {
      setPosts(data.result);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedPost, setSelectedPost] = useState();
  const [showPostModal, setShowPostModal] = useState(false);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleShowPostModal = () => {
    setShowPostModal(true);
  };

  const handleClosePostModal = () => {
    setShowPostModal(false);
    setSelectedPost(null);
    window.location.reload();
  };

  const [showAddPostModal, setShowAddPostModal] = useState(false);

  const handleShowAddPostModal = () => {
    setShowAddPostModal(true);
  };

  const handleCloseAddPostModal = () => {
    setShowAddPostModal(false);
    window.location.reload();
  };

  return (
    <div className={styles.main}>
      <Navbar />
      {showPostModal && (
        <SelectedPostModal
          selectedPost={selectedPost}
          close={handleClosePostModal}
        />
      )}
      {showAddPostModal && <CreatePostModal close={handleCloseAddPostModal} />}
      <div className={styles.button_add_container}>
        <button
          onClick={handleShowAddPostModal}
          className={styles.button_add_post}
        >
          Criar post
        </button>
      </div>

      <Row className={styles.row}>
        {posts.map((post) => (
          <PostCard
            showModal={handleShowPostModal}
            selectPost={handleSelectPost}
            post={post}
            key={post._id}
          />
        ))}
      </Row>
    </div>
  );
};

export default AdminPosts;
