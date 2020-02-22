import React from "react";

import CoffeePost from "../CoffeePost/CoffeePost";

const coffeePosts = props => {
  let displayedPosts = null;

  if (props.posts && !props.empty) {
    const reversedCoffeePosts = Object.keys(props.posts).reverse();
    displayedPosts = reversedCoffeePosts.map(postKey => {
      const eachPost = props.posts[postKey];
      return (
        <CoffeePost
          data-testid="post"
          roaster={eachPost.roaster}
          origin={eachPost.origin}
          region={eachPost.region}
          process={eachPost.process}
          notes={eachPost.notes}
          starRating={eachPost.rating}
          author={eachPost.author || "none"}
          datePosted={eachPost.datePosted}
          key={postKey}
          // this logic allows posts to be deleted in 'feed' and 'locker'
          clickDelete={() => props.delete(eachPost.id || postKey)}
          clickEdit={() => props.edit(eachPost.id || postKey)}
        />
      );
    });
  }

  if (props.empty) {
    displayedPosts = (
      <div>
        <h3>It looks like your locker is empty,</h3>
        <h3>please add a post!</h3>
      </div>
    );
  }
  return <div>{displayedPosts}</div>;
};

export default coffeePosts;
