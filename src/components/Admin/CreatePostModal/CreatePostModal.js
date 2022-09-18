import React, { useState } from "react";
import moment from "moment";

import styles from "./CreatePostModal.module.css";

import api from "../../../services/api";

function CreatePostModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      description,
      local,
      date,
      tags,
    };

    const response = await api
      .post(`/posts/create`, post)
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal}>
        <h1 className={styles.modal_title}>Criar novo post</h1>

        {/* Form */}
        <form
          className={styles.modal_form}
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* Title */}
          <label className={styles.modal_label} htmlFor="add-post-title">
            Título
          </label>
          <input
            placeholder="Your title here"
            className={styles.modal_input}
            type="text"
            name="title"
            id="add-post-title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {/* Description */}
          <label className={styles.modal_label} htmlFor="add-post-description">
            Descrição
          </label>
          <textarea
            placeholder="Type anything you want"
            className={styles.modal_textarea}
            name="description"
            id="add-post-description"
            cols="30"
            rows="5"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          {/* Local */}
          <label className={styles.modal_label} htmlFor="add-post-title">
            Local
          </label>
          <input
            placeholder="Your local here"
            className={styles.modal_input}
            type="text"
            name="local"
            id="add-post-title"
            required
            value={local}
            onChange={(e) => {
              setLocal(e.target.value);
            }}
          />
          {/* Date */}
          <label className={styles.modal_label} htmlFor="add-post-date">
            Data
          </label>
          <input
            className={styles.modal_input}
            type="date"
            required
            name="date"
            id="add-post-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          {/* Tags */}
          <label className={styles.modal_label} htmlFor="add-post-description">
            Tags
          </label>
          <textarea
            placeholder="Type anything you want"
            className={styles.modal_textarea}
            name="tags"
            id="add-post-description"
            cols="30"
            rows="5"
            required
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
          ></textarea>
          {/* Submit */}
          <input
            className={`${styles.form_button} btn btn-outline-primary`}
            type="submit"
            value="Criar"
          />
          <input
            className={`${styles.form_button} btn btn-outline-danger`}
            type="button"
            value="Cancelar"
            onClick={props.close}
          />
        </form>
      </div>
    </div>
  );
}

export default CreatePostModal;
