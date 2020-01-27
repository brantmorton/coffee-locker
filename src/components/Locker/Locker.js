import React from "react";
import CoffeePosts from "../CoffeePosts/CoffeePosts";

const locker = props => {
  let posts;
  let filteredPosts;
  let mappedPosts;
  let coffeePosts = <p>Loading...</p>;
  
  if (props.posts) {
    const user = props.auth.getProfile().nickname;
    posts = Object.keys(props.posts);
    filteredPosts = posts.filter(
      post => props.posts[post].author === user
    );
    mappedPosts = filteredPosts.map(post => props.posts[post]);
    coffeePosts = <CoffeePosts posts={mappedPosts} delete={props.delete} />;
  }
  return coffeePosts ;
};

export default locker;
