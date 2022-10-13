import React from 'react';
import './Blog.css';
import  GetTime from './Clock'

 function Blog ()
{
    return(
        <div>
            <GetTime/>
            <div className='about'> <h1>welcome to blog page </h1>
            <div className='im'>image</div></div>
        </div>
    )
}
export default Blog;