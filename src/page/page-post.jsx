import React,{useEffect,useState} from 'react';
import { useParams, NavLink } from 'react-router-dom';

export const FanPagePost = () => {
  const [postsId, setIdPosts] = useState(null);
 const{id} = useParams();
 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(respons => respons.json())
      .then(data => setIdPosts(data));
  }, [id]);
  return (
    <div>
      {postsId && (
        <div className='text'>
          <h3>id{postsId.id}</h3>
          <h1>{postsId.title}</h1>
          <p>{postsId.body}</p>
           <button><NavLink to={`/blog/${postsId.id}/edit`}>
            коментарии
            </NavLink></button> 
        </div>
      )}
    </div>
  )
}
