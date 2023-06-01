import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'



const Users = () => {
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users/1/albums')
       .then((response) => {
           setUserData(response.data);
       })
    })
  return (  
    <div className="main">
      <div className="heading">
        <div className="logo">
          <h1>Axios Data</h1>
        </div>
        <div className="links">
            <NavLink className="link" to='/Albums'>Albums</NavLink>
            <NavLink className="link" to='/Users'>Users</NavLink>
            <NavLink className="link" to='/'>Todos</NavLink>
        </div>
        <div className="search">
        <input type='text' className='search-input' placeholder='Enter to Search' onChange={((e) =>{setSearch(e.target.value)})} />
        <button className='btn'>Search</button>
        </div>
        </div>
        <div className="table-data">
            <table>
                <thead>
                    <tr>
                        <th>Sl no.</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.filter((data) =>{
                        if(search === ""){
                            return data;
                        }else if(data.title.toUpperCase().includes(search.toUpperCase())){
                            return data;
                        }
                        
                    })
                    .map((data) => {
                        return(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </div>
  )
}

export default Users