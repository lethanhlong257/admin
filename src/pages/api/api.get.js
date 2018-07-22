import axios from 'axios';

const option = {
};

const get = (url) => {
  return (
    new Promise((resolve, reject) => {
      axios.get(url, option)
        .then((response) => { resolve(response); })
        .catch((err) => {
          reject(err);
        });
    })
  );
};

export default get;
