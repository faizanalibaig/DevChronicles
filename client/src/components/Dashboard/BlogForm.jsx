import React, { useState } from 'react';
import styles from '../../data/styles.json';

import axios from 'axios';

function BlogForm() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    (async () => {
      const response = await axios('http://localhost:5000/api/blog', {
        method: 'POST',
        data: { title, slug, content, author },
      });

      setTitle('');
      setSlug('');
      setContent('');
      setAuthor('');
    })();
  };

  return (
    <div className='' style={{ marginTop: '20px', marginBottom: '50px' }}>
      <form className='flex flex-col gap-4' onSubmit={handleFormSubmit}>
        <label>Enter Blog Title:</label>
        <input
          type='text'
          name='title'
          style={{
            backgroundColor: styles['search-input-bg'],
            padding: '10px 20px',
            width: '750px',
          }}
          className='rounded-[8px]'
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Enter Blog Slug:</label>
        <input
          type='text'
          name='title'
          style={{
            backgroundColor: styles['search-input-bg'],
            padding: '10px 20px',
            width: '750px',
          }}
          className='rounded-[8px]'
          onChange={(e) => setSlug(e.target.value)}
        />

        <label>Enter Author Name:</label>
        <input
          type='text'
          name='title'
          style={{
            backgroundColor: styles['search-input-bg'],
            padding: '10px 20px',
            width: '750px',
          }}
          className='rounded-[8px]'
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Enter your Content:</label>
        <textarea
          name='content'
          rows='4'
          cols='50'
          style={{
            backgroundColor: styles['search-input-bg'],
            padding: '10px 20px',
            height: '280px',
            resize: 'none',
          }}
          className='rounded-[8px]'
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type='submit'
          value='Submit'
          style={{
            backgroundColor: styles['search-input-bg'],
            padding: '10px 20px',
          }}
          className='rounded-[8px] cursor-pointer'
        />
      </form>
    </div>
  );
}

export default BlogForm;
