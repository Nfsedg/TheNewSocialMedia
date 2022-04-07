import axios from 'axios';

const createUser = async (newUser) => {
  const response = await axios.post('http://localhost:3005/user', newUser);

  return response.data;
};

const searchUser = async (token) => {
  const response = await fetch('http://localhost:3005/user', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return response;
};

export { createUser, searchUser };
