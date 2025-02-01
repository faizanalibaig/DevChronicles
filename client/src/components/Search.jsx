import React from 'react';
import styles from '.././data/styles.json';

function Search() {
  return (
    <div className='flex gap-3  font-sans' style={{ margin: '20px 0px' }}>
      <input
        type='text'
        placeholder='Search blog post...'
        className='rounded-[10px] w-[400px]'
        style={{
          backgroundColor: styles['search-input-bg'],
          padding: '10px 20px',
        }}
      />
      <button
        className='rounded-[10px] w-[150px] cursor-pointer outline-none'
        style={{
          backgroundColor: styles['search-button-bg'],
          padding: '10px 20px',
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
