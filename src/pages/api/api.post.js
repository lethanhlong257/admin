import axios from 'axios';

const post = (url, data) => {
  return (
    new Promise((resolve, reject) => {
      axios.post(url, data)
        .then((response) => { resolve(response); })
        .catch((err) => {
          reject(err);
        });
    })
  );
};

export default post;
