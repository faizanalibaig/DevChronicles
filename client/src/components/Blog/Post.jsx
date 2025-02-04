import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import styles from '../../data/styles.json';
import { dateformatter } from '../../utils/dateformatter';
import { paragraphAlignment } from '../../utils/paragraphalignment';

function Post() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function findBlog() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blog/find/${slug}`
        );
        setBlog(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    findBlog();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <section
      style={{
        backgroundColor: styles['background-color'],
        padding: '35px 40px',
      }}
      className='w-full h-auto flex flex-col items-center text-white'
    >
      <div className='w-[50%]'>
        <h1 className='font-serif text-2xl font-bold'>{blog.title}</h1>
        <div className='w-full flex items-center justify-between text-sm'>
          <p>Author: {blog.author}</p>
          <p>Published: {dateformatter(blog.publish_date)}</p>
        </div>

        <div
          style={{
            margin: '40px 0px',
            lineHeight: '1.8',
          }}
          className='text-justify'
          dangerouslySetInnerHTML={{
            __html: paragraphAlignment(blog?.content || '', 100),
          }}
        />
      </div>
    </section>
  );
}

export default Post;
