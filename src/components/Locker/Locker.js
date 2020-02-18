import React from "react";
import { connect } from "react-redux"

import CoffeePosts from "../CoffeePosts/CoffeePosts";
import mapAuthStateToProps from "../../helpers/mapAuthStateToProps"

const locker = props => {
  let coffeePosts = null;

  if (props.posts) {
    const postKeys = Object.keys(props.posts);
    const posts = { ...props.posts };
    const user = props.auth.getProfile().nickname;

    // this is so key does not get lost after filtering and mapping
    for (let postId in posts) {
      posts[postId].id = postId;
    }

    const filteredPosts = postKeys.filter(
      postKey =>
        posts[postKey].author === user ||
        posts[postKey].author === props.testUser
    );
    // maps keys back into an object
    let mappedPosts = filteredPosts.map(postKey => posts[postKey]);

    if (mappedPosts.length > 0) {
      coffeePosts = (
        <div>
          <CoffeePosts
            posts={mappedPosts}
            delete={props.delete}
          />
        </div>
      );
    } else {
      coffeePosts = (
        <CoffeePosts empty />
      );
    }
  }
  return coffeePosts;
};

export default connect(mapAuthStateToProps)(locker);
