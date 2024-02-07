import React from "react";
import NavigationSidebar from "./navigation-sidebar/NavigationSidebar";
import TuitList from "./home/TuitList";
import WhoToFollowList from "./who-to-follow/WhoToFollowList";
import WhatsHappening from "./home/WhatsHappening";

function Home() {
  return (
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="home"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
          <WhatsHappening />
          <TuitList/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
  );
}

export default Home;