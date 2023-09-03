import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import UserList from "./components/userList/userList";
import CreatUser from "./components/CreatUser/CreatUser";
function App() {
  const [user, setUser] = useState([
  ]);
  const [showModal , setShowModal ] = useState()
  const DelUser = (id) => {
    setUser ((prev)  =>{
      return prev.filter((user)=>{ 
        return user.id !== id
      })
    })
  }
  const CloseModal = (e) =>{
    if (e.target.className === 'overlay' || e.code === 'Escape  ' ) setShowModal(false)
  }
  const addUser = (user)=>{
    setUser((prev) => {
      return [... prev , user]
    })
    setShowModal(false)
  }
  return (
    <div onKeyDown={CloseModal} onClick={CloseModal} className="App">
      <Navbar setShowModal={setShowModal} users_length={user.length}  />
      <main>
        {user.length === 0 && (
          <div className="no_user">
            <h1>NO USER</h1>{" "}
          </div>
        )}
        <UserList user={user}  DelUser={DelUser} />
      </main>
      { showModal && <CreatUser addUser={addUser}  />} 
    </div>
  );
}

export default App;


// {
//   id: 6,
//   imageUrl: "../public/Images/User.jpg",
//   firstname: "6",
//   lastname: "Tursunov",
//   age: 16,
//   from: "Uzbekistan",
//   job: "Programmer",
//   gendar: "Male",
// },