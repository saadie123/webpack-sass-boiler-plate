import 'popper.js';
import 'bootstrap';
import './index';

const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise resolved');
    }, 5000);
  });
};

const callApi = async () => {
  const response = await promise();
  console.log(response);
};

callApi();
