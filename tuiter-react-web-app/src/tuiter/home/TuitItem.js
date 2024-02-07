import TuitStats from "./TuitStats";
import tuitStatsArray from "./tuitStats.json"

import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const PostSummaryItem = ({post = {
        "_id": 123,
        "username": "SpaceX",
        "handle": "@spacex",
        "time": "2h",
        "tuit": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.",        
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "retuits": 432,
        "replies": 123,
        "topic": "Space",
        "likes": 234,
        "liked": false,
        "image": "res/tesla.png"
}}) => {


    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <section className="d-inline list-group list-group-flush p-0">
            <div className="list-group-item border">

                <div className="d-flex flex-row">

                    <div className="d-flex flex-column px-3">
                        <p className="circle">
                            <img src={post.image} alt="summaryImage" />
                        </p>
                    </div>

                    <div className="d-flex flex-column">
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)} />
                        <p className="mb-0">
                            <span className="fw-bolder">
                                {post.username}
                            </span>
                            <i className="fa-solid fa-check"></i>
                            {post.handle}
                            <small className="text-muted"> 
                                {String.fromCharCode(183)} {post.time}
                            </small>
                        </p>
                        <div className="ms-auto text-start">
                            {post.tuit}
                        </div>

                        <div className="d-flex flex-row gap-5 pt-2">
                            <TuitStats post={post} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostSummaryItem;