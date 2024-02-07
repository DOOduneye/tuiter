import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <div>
            <div className="list-group list-group-flush border rounded-3">
                <a className={`list-group-item
                    ${active === 'tuiter' ? 'active' : ''}`} href="/tuiter">
                    Tuiter
                </a>

                <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`} href="/tuiter">
                    <i className="fa-solid fa-home"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Home
                    </span>
                </a>

                <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href="/explore">
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Explore
                    </span>
                </a>

                <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="/notifications">
                    <i className="fa-solid fa-bell"></i> 
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Notifications
                    </span>
                </a>

                <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="/messages">
                    <i className="fa-solid fa-envelope"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Messages
                    </span>
                </a>

                <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="/bookmarks">
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Bookmarks
                    </span>
                </a>

                <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="/lists">
                    <i className="fa-solid fa-list"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Lists
                    </span>
                </a>

                <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="/profile">
                    <i className="fa-solid fa-user"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        Profile
                    </span>
                </a>

                <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="/more">
                    <i className="fa-solid fa-ellipsis-h"></i>
                    <span className="p-1 d-none d-xl-inline d-xxl-inline">
                        More
                    </span>
                </a>
         </div>
    
            <div className="d-grid mt-2">
                <a href="tweet.html" className="btn btn-primary btn-block rounded-pill"> Tweet </a>
            </div>
        </div>
    );
};
 
export default NavigationSidebar;