import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAlbumData } from "../../../store/reducers/api/AlbumSlice";

const AlbumData = () => {

    let dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() =>{
        dispatch(fetchAlbumData());
    },[dispatch],[])
    
    if(state.data.album.isLoading){
        return <h1>Loading....</h1>
    }
    if(state.data.album.isError){
        return <h1>Sorry!!  Can Not Load the Data</h1>
    }

  return (
    <div className="main">
      <div className="navbar">
        <div className="head"> 
          <h1>Api call with Redux</h1>
        </div>
        <div className="links">
          <NavLink to="/post" className="btn">Posts</NavLink>
          <NavLink to="/comments" className="btn">Comments</NavLink>
          <NavLink to="/albums" className="btn">Albums</NavLink>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
            {state.data.album.album && state.data.album.album.map((e) => {
                return(
                <tr key={e.id}>
                    <td style={{textAlign: "center"}}>{e.id}</td>
                    <td>{e.title}</td>
                </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumData;
