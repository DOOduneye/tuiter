import React from "react";
import TuitList from "../home/TuitList";
import "./ExploreComponent.css";

const ExploreComponent = () => {

    return (
        <section className="row w-auto">
            <header className="w-100 d-inline-block ps-0">
                <div className="d-flex flex-nowrap gap-3">

                    <div className="input-group">
                        <span className="input-group-text bg-white text-black wd-border-20-0-0-20" id="basic-addon">
                            <i className="fa-solid fa-search"></i>
                        </span>
                        <input type="text" className="form-control p-0 wd-border-0-20-20-0" placeholder="Search Tuiter" />
                    </div>

                    <div>
                        <a href="explore-settings.html">
                            <i className="fa-solid fa-gear text-primary fs-4"></i>
                        </a>
                    </div>
                </div>
            </header>

            <ul className="nav nav-tabs mt-2">
                <li className="nav-item">
                    <a className="nav-link active rounded-1" href="for-you.html">
                        For You
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-1" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-1" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-1" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-sm-none d-none d-sm-inline d-md-inline d-lg-inline d-xxl-inline d-xl-inline">
                    <a className="nav-link rounded-1" href="entertainment">
                        Entertainment
                    </a>
                </li>
            </ul>

            <section className="card mt-2 p-0">
                    <img src={'res/starship.png'} className="card-img rounded-3 p-0 w-auto" alt="starship" />
                    <div className="card-img-overlay d-flex align-items-end">
                        <h5 className="card-title fw-bold fs-2 text-white">SpaceX's Starship</h5>
                    </div>
            </section>

            <TuitList />
        </section>
    );
};
export default ExploreComponent;