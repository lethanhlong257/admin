import fetch from 'isomorphic-fetch';

const dataWidgetText = () => {
  return (
    fetch('http://localhost:8080/api/dashboards')
      .then((result) => {
        return result.json();
      })
  );
};

export default dataWidgetText;
