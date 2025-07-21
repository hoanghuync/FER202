import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    navigate("/");
  };

  return (
    <div>
      <h2>Bạn chắc chắn muốn xóa bài viết này?</h2>
      <button onClick={handleDelete}>Xác nhận xóa</button>
      <button onClick={() => navigate("/")}>Hủy</button>
    </div>
  );
};

export default DeletePost;
