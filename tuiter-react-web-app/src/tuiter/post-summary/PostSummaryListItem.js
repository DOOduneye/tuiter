import React from "react";

const PostSummaryItem = (
 {post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "/tuiter/res/tesla.png"}}
) => {
 return(
  <section className="d-inline list-group list-group-flush p-0 ">
    <div className="list-group-item d-flex flex-nowrap gap-4 border">
        
        <div>
            <small className="text-muted fs-6 fw-normal">{post.topic}</small>

            <p className="fw-bolder mb-0">
                {post.userName}
                <i className="fa-solid fa-check"></i>
                <small className="text-muted"> {String.fromCharCode(183)} {post.time}</small>
            </p>
            
            <p className="fw-bolder">
                {post.title}
            </p>
            
            <p className="mb-0">
                <small className="text-muted">
                    123K Tweets
                </small>
            </p>
        </div>
        
        <div className="ms-auto">
            <img src={post.image} className="img-fluid align-middle rounded-3 wd-summary-icon" alt="summaryImage" />
        </div>
    </div>
  </section>
 );
};
export default PostSummaryItem;