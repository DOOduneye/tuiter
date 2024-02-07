import React from "react";
import { useSelector } from "react-redux";

import PostSummaryItem from "./PostSummaryListItem";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuits);

  return (
    <section className="pt-2 ps-0 pe-0">
      { postsArray.map(post => <PostSummaryItem key={post._id} post={post}/> ) }
    </section>
  );
};
export default PostSummaryList;