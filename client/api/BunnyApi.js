export const getAllBunnies = () => {
  return fetch('http://localhost:3000/api/v1/bunnies').then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
};