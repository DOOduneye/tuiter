import { useSelector } from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  const whoArray = useSelector(state => state.who);
  
  return (
    <div className="row w-auto d-inline-block list-group list-group-flush rounded-3 mx-auto border">
      <div className="list-group-item fw-bold fst-normal"> Who to follow </div>
      
      {whoArray.map(who => <WhoToFollowListItem key={who._id} who={who}/> )}

    </div>
 );
};

export default WhoToFollowList;
