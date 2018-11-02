const axios = require('axios');

//if restaurant dne in database, createone.

//if restaurant exists, return that restaurant.

//create methods for
// -- posting comments,
// -- like/dislike,
// -- percentage of likes,

export const createPost = (data) => {
  console.log('create post activated');
  console.log(data);
  return axios.post(`http://localhost:8081/restaurant`,{
    params: data
  })
};

//put method, does it create new one if it exists?
export const checkPost = (data) => {
  return axios.put(`http://localhost:8081/restaurant/test`, {
    params: data
  })
}

// export default (createPost, checkPost);
