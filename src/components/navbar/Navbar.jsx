import './Navbar.css'

const Navbar = ({users_length , setShowModal}) => {
  return (
    <div className='Navbar'>
      <div className="Title">
        <h1>CUser</h1>
      </div>
      <div className="User_number">
        <button onClick={()=>{
          setShowModal(true)
        }}>Create User</button>
        <h3 className='User_count'> { users_length <= 0 ? "No user" : " You have: "+ users_length + " user"}</h3>
      </div>
    </div>
  )
}

export default Navbar