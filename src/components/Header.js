import React from 'react'
import menuLogo from '../utils/menu-icon.png'
import youtubeLogo from '../utils/youtube-logo.png'
import userIcon from '../utils/user-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'


function Header() {
 const dispatch = useDispatch();
  const handleToggleMenu = ()=>{
   dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col py-2 my-2 shadow-lg'>

    <div className='flex col-span-1 flex-start items-center   ml-5'>
    <img className='h-6 border ' src={menuLogo} alt='menu-icons ' onClick={handleToggleMenu}/>
    <img className='h-12  ml-10 ' src={youtubeLogo} alt='youtube-icon'/>
    </div>

    <div className='col-span-10 px-10 flex items-center'>
    <input className='w-1/2  border border-gray-400 p-2 rounded-l-full' type='text' placeholder='search'/>
     <button className='border border-gray-400 p-2 px-5 bg-gray-100 rounded-r-full '> <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'black' }} /></button>
    </div>

    <div className='col-span-1'>
    <img className='h-8' src={userIcon} alt='user-icon'/>
    </div>
       
    </div>
  )
}

export default Header