import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useSelector } from "react-redux";

const TuitStats = (props) => {
    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch(updateTuitThunk({
            ...props.post,
            likes: props.post.likes + 1
        }));
        setClicked(!clicked);
    }

    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">

                <div className="d-flex align-items-center"> 
                    <i className={`fa-regular fa-heart ${clicked ? 'text-danger' : ''}`} onClick={tuitClickHandler} />
                    <span className='ms-1'>{props.post.likes}</span>
                </div>

                <div className="d-flex align-items-center ms-3">
                    <i className="fa-regular fa-comment"></i>
                    <span className="ms-1">{props.post.replies}</span>
                </div>

                <div className="d-flex align-items-center ms-3">

                    <i className="fa-solid fa-retweet"></i>
                    <span className="ms-1">{props.post.retuits}</span>
                </div>
            </div>

            <div className="d-flex align-items-center px-2">
                <i className="fa-solid fa-share"></i>
            </div>
        </div>
    )
}

export default TuitStats;
