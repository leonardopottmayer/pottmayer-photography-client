import React, { useState } from "react";
import moment from "moment";

import styles from "./SelectedPostModal.module.css";

import api from "../../../services/api";

import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function SelectedPostModal(props) {
  const [title, setTitle] = useState(props.selectedPost.title);
  const [description, setDescription] = useState(
    props.selectedPost.description
  );
  const [local, setLocal] = useState(props.selectedPost.local);
  const [date, setDate] = useState(props.selectedPost.date);
  const [tags, setTags] = useState(props.selectedPost.tags);
  const [file, setFile] = useState(null);

  const handleDeletePhoto = async (e) => {
    const response = await api.delete(`/photos/${e.target.value}`);

    if (response.status === 200) {
      alert("Foto removida com sucesso!");
    } else {
      alert(response.data.message);
    }

    // window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      description,
      local,
      date,
      tags,
    };

    const response = await api.patch(`/posts/${props.selectedPost._id}`, post);

    if (response.status === 200) {
      alert("Post atualizado com sucesso!");
      window.location.reload();
    } else {
      alert(response.data.message);
    }
  };

  const amountOfPhotos = props.selectedPost.photos.lenght;

  const onFormSubmitAddPhoto = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const response = await api
      .post(`/photos/${props.selectedPost._id}`, formData, config)
      .then((response) => {
        alert(response.data.message)
      }).catch((error) => {
        alert(error.response.data.message)
      });
  };

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal}>
        <h1 className={styles.modal_title}>{props.selectedPost._id}</h1>

        <Row className={styles.row}>
          {/* Form */}
          <Col xxl={6} lg={6} md={6} xs={12}>
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
              <label
                className={styles.modal_label}
                htmlFor="add-post-description"
              >
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
              <label
                className={styles.modal_label}
                htmlFor="add-post-description"
              >
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
                value="Atualizar"
              />
              <input
                className={`${styles.form_button} btn btn-outline-danger`}
                type="button"
                value="Cancelar"
                onClick={props.close}
              />
            </form>
          </Col>
          <Col xxl={6} lg={6} md={6} xs={12}>
            <div className={styles.photo_form_container}>
              <form
                className={styles.photo_form}
                onSubmit={onFormSubmitAddPhoto}
              >
                <label className={styles.send_file_label} htmlFor="file">
                  Anexar arquivo
                </label>
                <input
                  className={styles.send_file_input}
                  type="file"
                  id="file"
                  name="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
                <button className={styles.add_photo_button} type="submit">
                  Enviar
                </button>
                {file && <h5 className={styles.selected_file_name}>{file.name}</h5>}
              </form>
            </div>
            <div className={styles.table_container}>
              <table>
                <tbody>
                  {props.selectedPost.photos.map((ph) => (
                    <tr key={ph._id}>
                      <td className={styles.table_td}>
                        <img className={styles.table_imageTd} src={ph.url} />
                      </td>
                      <td className={styles.table_td}>
                        <button
                          className={`btn btn-outline-danger`}
                          value={ph._id}
                          onClick={handleDeletePhoto}
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SelectedPostModal;
