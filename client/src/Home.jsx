import React from 'react';
import styles from './data/styles.json';
import Search from './components/Search';
import Blog from './components/Blog/Blog';

function Home() {
  return (
    <div
      className='w-full  min-h-[85%] h-auto text-white font-serif flex flex-col justify-center items-center'
      style={{
        backgroundColor: styles['background-color'],
      }}
    >
      <Welcome />
      <Search />
      <Blog />
    </div>
  );
}

function Welcome() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h1
        className='text-6xl font-bold'
        style={{ color: styles['primary-text'] }}
      >
        Latest Blog Posts
      </h1>
      <p className=' font-sans' style={{ color: styles['secondary-text'] }}>
        Exploring code, sharing knowledge, and building the future.
      </p>
    </div>
  );
}

export default Home;
