import React from "react";

const WhoToFollowListItem = ({who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'tuiters/res/nasa.png' }}) => {
 return (
    <div className="list-group-item d-flex flex-nowrap">     
      <div className="p-1">
          <img src={who.avatarIcon} className="img-fluid wd-avatar-icon" alt="avatarIcon" />
      </div>
      
      <div className="p-1 lh-sm">
          <span className="fw-bold">{who.userName}</span>
          <i className="fa-solid fa-check"></i>
          <br />
          @{who.handle}
      </div>

      <div className="ms-auto p-1">
          <button className="btn btn-primary rounded-pill">
              Follow
          </button>
      </div>
    </div>
  );
};

export default WhoToFollowListItem;