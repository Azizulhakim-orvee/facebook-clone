import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

    console.log(posts);
   

  return (
    <div className="mb-28">
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.data().username}
          message={post.data().caption}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().profileImg}
          postImage={post.data().image}
        />
      ))}
    </div>
  );
};

export default Posts;
