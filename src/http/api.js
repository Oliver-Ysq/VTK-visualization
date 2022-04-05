import axios from "axios";
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        (response) => {
          if (response.data.status === 200) {
            resolve(response.data);
          } else {
            console.error(response.data.msg);
          }
        },
        (err) => {
          reject(err);
          console.error("操作异常");
        }
      )
      .catch((error) => {
        reject(error);
        console.error("操作异常");
      });
  });
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(
        (response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            console.error(response.data);
          }
        },
        (err) => {
          reject(err);
          console.error("操作异常");
        }
      )
      .catch((error) => {
        reject(error);
        console.error("操作异常");
      });
  });
}
