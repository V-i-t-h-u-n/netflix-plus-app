import { useState, useEffect } from 'react';

const Blog = () => {
  const [titleName, setTitle] = useState('React Hooks Demo Page');
  const [publishedOn, setPublishedOn] = useState(new Date());
  useEffect(() => {
    document.title = titleName;
    console.log(titleName);
  }, [titleName]);
  return (
    <div>
      Blog
      <p>Book Title: {titleName}</p>
      <button
        type="button"
        onClick={() => {
          setTitle('useEffect Demo');
        }}
      >
        Change Book Title
      </button>
      <p>Published On: {publishedOn.toString()}</p>
      <button
        type="button"
        onClick={() => {
          setPublishedOn(new Date());
        }}
      >
        Change Published Date
      </button>
    </div>
  );
};

export default Blog;
