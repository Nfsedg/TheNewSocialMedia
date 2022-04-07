const getComments = async (postId) => {
  const response = await fetch(`http://localhost:3005/comments/${postId}`);

  const comments = await response.json();

  return comments;
};

const postComments = async (token, content) => {
  const response = await fetch('http://localhost:3005/comments', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(content),
  });

  return response.json();
};

export { getComments, postComments };
