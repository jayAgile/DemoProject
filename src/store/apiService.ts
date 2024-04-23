import {emitter} from '.';

export const apiCall = (
  url: string,
  options: RequestInit = {},
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        emitter.emit('apiResponse', data);
        resolve(data);
      })
      .catch(error => {
        emitter.emit('apiError', error);
        reject(error);
      });
  });
};
