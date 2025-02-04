import React, { useEffect } from 'react';
import styles from '../../data/styles.json';
import { dateformatter } from '../../utils/dateformatter';

import { FaRegClock } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoCalendarOutline } from 'react-icons/io5';

import axios from 'axios';
import { Link } from 'react-router';

function Blog() {
  const [blogs, setBlogs] = React.useState([]);
  useEffect(() => {
    function fetchBlogs() {
      axios
        .get('http://localhost:5000/api/blog/getAll')
        .then((response) => {
          setBlogs(response.data);
        })
        .catch((error) => {
          console.error('Error fetching blogs:', error);
        });
    }

    fetchBlogs();
  }, []);

  console.log('blog -------------------------', blogs.data);

  return (
    <>
      {blogs?.data?.map((blog, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: styles['blog-post-bg'],
              padding: '35px 40px',
              marginTop: '10px',
            }}
            className='w-[700px] h-[250px] bg-white rounded-[12px] flex flex-col justify-between font-sans'
          >
            <div>
              <h1 className='font-bold text-xl'>{blog?.title}</h1>
              <p
                className='text-base'
                style={{ color: styles['secondary-text'], marginTop: '10px' }}
              >
                {blog?.content.substring(0, 200)}...
              </p>
            </div>
            <div
              className='text-sm flex justify-between items-center'
              style={{ color: styles['secondary-text'] }}
            >
              <div className='flex items-center gap-2'>
                <IoCalendarOutline />
                <p className=''>{dateformatter(blog?.publish_date)}</p>
                <div className='flex items-center gap-2'>
                  <FaRegClock />
                  <span>03 minutes</span>
                </div>
              </div>
              <div className='text-white text-base flex items-center gap-2 cursor-pointer'>
                <Link to={`article/${blog?.slug}`}>
                  <button className='cursor-pointer'>Read more</button>
                </Link>
                <span>
                  <FaArrowRightLong className='' />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Blog;
