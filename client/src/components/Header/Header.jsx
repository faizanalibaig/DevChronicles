import React from 'react';
import header from '../../data/header.json';
import styles from '../../data/styles.json';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';

function Header() {
  console.log(header);
  return (
    <header
      className='h-[15%] text-white p-20 font-serif flex justify-between'
      style={{
        backgroundColor: styles['background-color'],
        padding: '40px 50px',
      }}
    >
      <Link to='/'>
        <h1 className='text-xl font-black'>{header.title}</h1>
      </Link>
      <FaGithub className='text-2xl' />
    </header>
  );
}

export default Header;
