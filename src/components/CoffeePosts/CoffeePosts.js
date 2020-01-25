import React from "react";

import CoffeePost from "../CoffeePost/CoffeePost";

const coffeePosts = props => {
  let coffeePosts = <p>Loading...</p>;
  if (props.posts) {
    const reversedCoffeePosts = Object.keys(props.posts).reverse();
    coffeePosts = reversedCoffeePosts.map(post => {
      return (
        <CoffeePost
          roaster={props.posts[post].roaster}
          origin={props.posts[post].origin}
          region={props.posts[post].region}
          process={props.posts[post].process}
          notes={props.posts[post].notes}
          starRating={props.posts[post].rating}
          author={props.posts[post].author || "none"}
          key={post}
          clickDelete={() => props.delete(post)}
        />
      );
    });
  }

  return <div>{coffeePosts}</div>;
};

export default coffeePosts;
