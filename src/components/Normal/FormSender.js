import React, { useState } from "react";

import api from "../../services/api";

const FormSender = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("local", local);
    formData.append("date", date);
    formData.append("tags", tags);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return await api.post("/posts/photo", formData, config);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          name="title"
        />
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          name="description"
        />
        <input
          type="text"
          onChange={(e) => {
            setLocal(e.target.value);
          }}
          value={local}
          name="local"
        />
        <input
          type="text"
          onChange={(e) => {
            setTags(e.target.value);
          }}
          value={tags}
          name="tags"
        />
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
          name="date"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormSender;
