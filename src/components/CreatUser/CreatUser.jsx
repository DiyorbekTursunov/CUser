import { useState } from 'react'
import './CreatUser.css'
import {v4 as uuidv4} from 'uuid'
const CreatUser = ({addUser }) => {
    const [user , setUser] = useState( {
            id: uuidv4(),
            imageUrl: "",
            firstname:"",
            lastname: "",
            age: null,
            from: "",
            job: "",
    })
    const handelSubmit = (e)=>{
        e.preventDefault()
        addUser(user)
    }
  return (
    <div className='CreatUser'>
        <div className="overlay">
            <div className="modal">
                <form onSubmit={handelSubmit} className='User_form'>
                    <h1 className='center'>Create new user</h1>
                    <label>
                        <span>Image url</span>
                        <input required onChange={(e) => {setUser((res)=>{
                            return { ... res , imageUrl : e.target.value }
                        })}} type="text" name="" id="" />
                    </label>
                    <label>
                        <span>First name</span>
                        <input required onChange={(e) => {setUser((res)=>{
                            return { ... res , firstname : e.target.value }
                        })}} type="text" name="" id="" />
                    </label>
                    <label>
                        <span>Last name</span>
                        <input required onChange={(e) => {setUser((res)=>{
                            return { ... res , lastname : e.target.value }
                        })}} type="text" name="" id="" />
                    </label>
                    <label>
                        <span>Age</span>
                        <input required onChange={(e) => {setUser((res)=>{
                            return { ... res , age : e.target.value }
                        })}} type="number" name="" id="" />
                    </label>
                    <label>
                        <span>From</span>
                        <input required onChange={(e) => {setUser((res)=>{
                            return { ... res , from : e.target.value }
                        })}} type="text" name="" id="" />
                    </label>
                    <label>
                        <span>Job</span>
                        <input required onChange={(e) => {setUser((res)=>{
                            return { ... res , job : e.target.value }
                        })}} type="text" name="" id="" />
                    </label>
                    <button className='ModalBtn' >Add</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatUser

// ../public/Images/User.jpg