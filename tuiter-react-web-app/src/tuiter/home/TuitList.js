import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TuitItem from "./TuitItem";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();

  const loadTuits = () => {
    return dispatch(findTuitsThunk());
  };
  
  useEffect(() => {
    loadTuits();
  }, []);
  
  return (
    <section className="pt-2 ps-0 pe-0">
      {loading && <div className="text-center">Loading...</div>}

      {tuits.map((tuit) => (  
        <TuitItem key={tuit._id} post={tuit} />
      ))}


    </section>
  );
};
export default TuitList;