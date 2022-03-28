import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';


export const FanBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respons => respons.json())
    .then(data => setPosts(data));
  },[]);

  return (
    <div className='blog-ul'>
      <h3> Blog </h3>
     

      {posts.map(post =>(
        <NavLink key={post.id} to={`/blog/${post.id}`}>
          <li>id{post.id}:{post.title}</li>
        </NavLink>
      ))}
    </div>
  )
}