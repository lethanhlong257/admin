import axios from 'axios';

const option = {
};

const count = (url) => {
  return (
    new Promise((resolve, reject) => {
      axios.get(url, option)
        .then((sum) => { resolve(sum); })
        .catch((err) => {
          reject(err);
        });
    })
  );
};

export default count;
