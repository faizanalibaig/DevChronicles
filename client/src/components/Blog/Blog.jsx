import React from 'react';
import styles from '../../data/styles.json';

import { FaRegClock } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoCalendarOutline } from 'react-icons/io5';

function Blog() {
  return (
    <div
      style={{
        backgroundColor: styles['blog-post-bg'],
        padding: '35px 40px',
        marginTop: '10px',
      }}
      className='w-[700px] h-[250px] bg-white rounded-[12px] flex flex-col justify-between font-sans'
    >
      <div>
        <h1 className='font-bold text-xl'>How to get Hired?</h1>
        <p
          className='text-base'
          style={{ color: styles['secondary-text'], marginTop: '10px' }}
        >
          So, I was reading this blog by Sam Altman, How to Hire, and it got me
          thinking: as developers, we re...
        </p>
      </div>
      <div
        className='text-sm flex justify-between items-center'
        style={{ color: styles['secondary-text'] }}
      >
        <div className='flex items-center gap-2'>
          <IoCalendarOutline />
          <p className=''>12/15/2022</p>
          <div className='flex items-center gap-2'>
            <FaRegClock />
            <span>03 minutes</span>
          </div>
        </div>
        <div className='text-white text-base flex items-center gap-2 cursor-pointer'>
          <button className='cursor-pointer'>Read more</button>
          <span>
            <FaArrowRightLong className='' />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
