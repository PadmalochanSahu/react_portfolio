import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchComments } from "../Reducers/Comment";
import { useDispatch, useSelector } from "react-redux";


const CommentData = () => {
  let dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() =>{
    dispatch(fetchComments());
},[dispatch],[])

if(state.data.comment.isLoading){
    return <h1>Loading....</h1>
}
if(state.data.comment.isError){
    return <h1>Sorry!!  Can Not Load the Data</h1>
}

  return (
    <div className="main">
      <div className="navbar">
        <div className="head">
          <h1>Api call with Redux</h1>
        </div>
        <div className="links">
          <NavLink to="/post" className="btn">
          Posts
          </NavLink>
          <NavLink to="/comments" className="btn">
            Comments
          </NavLink>
          <NavLink to="/albums" className="btn">
            Albums
          </NavLink>
        </div>
      </div>

      <table>
        <thead>
            <tr>
                <th>Sl No.</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
        {state.data.comment.comment && state.data.comment.comment.map((e) =>{
                    return(
                        <tr key={e.id}>
                           <td style={{textAlign: "center"}}>{e.id}</td>
                           <td className='table-data'>{e.email}</td>
                           <td className='table-data'>{e.body}</td>
                        </tr>
                    );
                  })}        
        </tbody>
      </table>
    </div>
  );
};

export default CommentData;
