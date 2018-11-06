const axios = require('axios');

//if restaurant dne in database, createone.

//if restaurant exists, return that restaurant.

//create methods for
// -- posting comments,
// -- like/dislike,
// -- percentage of likes,

//create comment
export const createComment = (comment) => {
  console.log('add comment');
  console.log(comment);
  return axios.put(`http://localhost:8081/restaurant/comment`, {
    params: comment,
  })
};


//is this create post method even required anymore? checkPost below creates new field if object doesnt exist.
export const createPost = (data) => {
  console.log('create post activated');
  console.log(data);
  return axios.post(`http://localhost:8081/restaurant`,{
    params: data
  })
};

//put method, does it create new one if it exists?
//this method creates a new restaurant model if it dne, else returns existing i believe.
export const checkPost = (data) => {
  console.log("checkpost activated")
  return axios.put(`http://localhost:8081/restaurant/selected`, {
    params: data
  })
};

// export default (createPost, checkPost);
