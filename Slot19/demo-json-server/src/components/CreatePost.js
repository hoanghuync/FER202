import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      navigate("/");
    } catch (err) {
      console.error("Lỗi:", err);
    }
  };

  return (
    <div>
      <h2>Thêm bài viết mới</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tiêu đề" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Nội dung" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Tạo</button>
      </form>
    </div>
  );
};

export default CreatePost;
