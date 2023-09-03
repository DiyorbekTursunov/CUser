import './userList.css'

import React from 'react'

const UserList = ({user , DelUser} ) => {
  return (
    <div className='user_list '>
        <div className='user_list_container container '> 
        {user.map((e)=>{
        return(
          <div className='Card' key={e.id}>
            <div className="user-photo">
              <img src={e.imageUrl} alt=""/>
            </div>
            <div className="user_about">
              <h3 className="name"> {e.firstname} {e.lastname}</h3>
              <h3 className="from">From : {e.from}</h3>
              <h3 className="job">Job : {e.job}</h3>
              <h3 className="age"> Age : {e.age}</h3>
            </div>
            <div className="delete_btn">
              <button onClick={() => DelUser(e.id)} type='button' id='Delete_button'>Delete</button>
            </div>
          </div>
        )})}
        </div>
    </div>
  )
}

export default UserList