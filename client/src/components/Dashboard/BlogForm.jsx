import React, { useState } from 'react';
import styles from '../../data/styles.json';

function BlogForm() {
  const [title, setTitle] = useState('');

  console.log(title);

  return (
    <div className='' style={{ marginTop: '20px', marginBottom: '50px' }}>
      <form className='flex flex-col gap-4'>
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
