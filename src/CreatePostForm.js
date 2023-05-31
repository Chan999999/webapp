import React, { useState } from 'react';
import axios from 'axios';

const CreatePostPage = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/posts', { title, content });
      console.log(response.data);
      // 清空表單
      setTitle('');
      setContent('');
      // 刷新貼文列表
      // 可以在此處調用獲取貼文的函數
      // 重定向到首頁
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostPage;

