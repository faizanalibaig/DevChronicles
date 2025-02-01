import React from 'react';
import styles from '../../data/styles.json';

import BlogForm from './BlogForm';

function Main() {
  return (
    <div
      className='w-full h-auto text-white font-serif flex flex-col justify-center items-center'
      style={{
        backgroundColor: styles['background-color'],
        marginBottom: '200px',
      }}
    >
      <h1 className='text-3xl font-bold'>Write your Blog Post!</h1>
      <BlogForm />
    </div>
  );
}

export default Main;
