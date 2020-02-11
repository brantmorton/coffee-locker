import React from "react";

import CoffeePost from "../CoffeePost/CoffeePost";

const coffeePosts = props => {
  let coffeePosts = null;
  if (props.posts) {
    const reversedCoffeePosts = Object.keys(props.posts).reverse();
    coffeePosts = reversedCoffeePosts.map(postKey => {
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
          auth={props.auth}
        />
      );
    });
  }

  return <div>{coffeePosts}</div>;
};

export default coffeePosts;
