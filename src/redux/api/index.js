import axios from 'axios';

function getPost(id) {
  return axios.get(`/posts/${id}`);
}

export { getPost };
