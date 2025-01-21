"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  const fetchComments = async () => {
      await axios.get('/api/comments/get')
      .then((res) => {
        console.log(res);
        setComments(res.data); 
      })
      .catch ((err) => {
      console.error(err)
    });

    };

  const submitComment = async (event) => {
    event.preventDefault();  
    if (!newComment) return;  

    await axios.post('/api/comments/post', { data: newComment })
    .then((res) => {
        setComments((prevComments) => [...prevComments, res.data]);
        setNewComment(''); 
    })
    .catch((err) => {
        console.log(err);
    })
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      {error && <p>{error}</p>}

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>

      <form onSubmit={submitComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a new comment"
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}
