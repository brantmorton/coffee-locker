import React from "react";
import CoffeePosts from "../CoffeePosts/CoffeePosts";

const locker = props => {
  let coffeePosts = <p>Loading...</p>;
  
  if (props.posts) {
    const postKeys = Object.keys(props.posts);
    const posts = {...props.posts};
    const user = props.auth.getProfile().nickname;
    
    // this is so key does not get lost after filtering and mapping
    for (let postId in posts) {
      posts[postId].id = postId
    }

    const filteredPosts = postKeys.filter(postKey => posts[postKey].author === user);
    // maps keys back into an object
    const mappedPosts = filteredPosts.map(postKey => posts[postKey]);
    
    coffeePosts = <CoffeePosts posts={mappedPosts} delete={props.delete} />;
  }
  return coffeePosts;
};

export default locker;
