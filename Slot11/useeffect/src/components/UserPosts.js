import React, { useEffect, useState } from 'react';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
}

export default UserPosts;
