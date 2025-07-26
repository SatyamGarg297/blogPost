import React, { useState } from 'react'
import blogData from '../components/BlogData/BlogData';
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts';

const FeaturedPage = () => {
  const [blogs, setBlogs] = useState(blogData);


  return (
    <div>
      <FeaturedPosts blogs={blogs} />
    </div>
  )
}

export default FeaturedPage
