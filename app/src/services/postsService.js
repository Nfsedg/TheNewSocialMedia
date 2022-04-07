const getPost = async () => {
  const response = await fetch('http://localhost:3005/posts');

  return response.json();
};

const createPost = async (content, token) => {
  const data = {
    content,
  };

  const response = await fetch('http://localhost:3005/posts', {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

const deletePost = async (id, token) => {
  const response = await fetch(`http://localhost:3005/posts/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return response;
};

export { getPost, createPost, deletePost };
