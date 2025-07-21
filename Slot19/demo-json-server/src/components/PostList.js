import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setData(data.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa:", error);
    }
  };

  if (loading) return <div>Đang tải...</div>;

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <Link to="/create"><button>Tạo bài viết mới</button></Link>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/edit/${post.id}`}>Chỉnh sửa</Link>
            <button onClick={() => handleDelete(post.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
