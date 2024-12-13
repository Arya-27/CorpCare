import React, {useState} from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; 
import { setLocalStorage } from '../../utils/localStorage';

const Header = (props) => {

  // const [username,setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logoutUser = () =>{
     localStorage.setItem('loggedInUser', '')
     props.changeUser('')
    //  window.location.reload()
  } 
  return (
    <div className='flex items-center justify-between bg-blue-500 p-5 rounded-b-lg shadow-lg'>
      <div>
        <h1 className='text-2xl font-serif font-bold text-white'>
          Hello <br />
          <span className='text-3xl font-serif font-bold'> username🖐 </span>
        </h1>
      </div>
      <button onClick={logoutUser} className='flex items-center bg-blue-600 text-lg font-medium text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200'>
        <FaSignOutAlt className='mr-2' /> 
        Log Out
      </button>
    </div>
  );
}

export default Header;