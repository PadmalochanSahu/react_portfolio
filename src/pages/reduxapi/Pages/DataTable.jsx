import React, { useEffect } from 'react'
import './DataTable.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodo } from '../../../store/reducers/api/DataTableSlice';
import { NavLink } from 'react-router-dom';

const DataTable = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() =>{
        dispatch(fetchTodo());
    },[dispatch],[])
    

    if(state.data.post.isLoading){
        return <h1>Loading....</h1>
    }
    return(
        <div className='main'>
           <div className="navbar">
            <div className="head">
                 <h1>Api call with Redux</h1>
            </div>
            <div className="links">
                <NavLink to="/post" className='btn' >Posts</NavLink>
                <NavLink to="/comments" className='btn'>Comments</NavLink>
                <NavLink to ="/albums" className='btn'>Albums</NavLink>
            </div>
           </div>
            <table>
                <thead>
                  <tr>
                    <th>Sl no.</th>
                    <th>Title</th>
                    <th>Body</th>
                  </tr>
                </thead>
                <tbody>
                  {state.data.post.post && state.data.post.post.map((e) => {
                    return(
                    <tr key={e.id}>
                        <td style={{textAlign: "center"}}>{e.id}.</td>
                        <td className='table-data'>{e.title}</td>
                        <td className='table-data'>{e.body}</td>
                    </tr>
                    )
                  })}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable