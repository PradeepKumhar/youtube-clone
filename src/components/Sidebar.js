import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFilm,
  faPlayCircle,
  faHistory,
  faClock,
  faHeart,
  faMusic,
  faBolt,
  faShoppingBag,
  faGamepad,
  faNewspaper,
  faFutbol,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const isTextVisible = useSelector((state) => state.sidebar.isMenuOpen);

  return (
    <div className={`${isTextVisible ? 'w-48' : 'w-28'} h-screen p-3 shadow-lg`}>
      {/* Main Section */}
      <ul className='space-y-4'>
        <li className='flex items-center'>
          <button className={`flex items-center ${isTextVisible ? 'space-x-4' : 'flex-col'} p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg`}>
            <FontAwesomeIcon icon={faHome} size='lg' />
            {<span className={`${isTextVisible?'':'pt-2'}`}>Home</span>}
          </button>
        </li>
        <li className='flex items-center'>
          <button className={`flex items-center ${isTextVisible ? 'space-x-4' : 'flex-col'} p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg`}>
            <FontAwesomeIcon icon={faFilm} size='lg' />
            {<span className={`${isTextVisible?'':'pt-2'}`}>Shorts</span>}
          </button>
        </li>
        <li className='flex items-center'>
          <button className={`flex items-center ${isTextVisible ? 'space-x-4' : 'flex-col pl-0'} p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg`}>
            <FontAwesomeIcon icon={faPlayCircle} size='lg' className={`${isTextVisible?'':'pr-5'}`} />
            {<span className={`${isTextVisible?'':' text-sm pt-2 pl-0 p-0'}`}>Subscriptions</span>}
          </button>
        </li>
      </ul>

      {/* "You" Section */}
      <h1 className={`pt-5 pb-2 ${isTextVisible ? '' : 'pl-2'} font-bold text-lg text-gray-700`}>You</h1>
      {isTextVisible && (
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faClock} size='lg' />
              <span>Watch Later</span>
            </button>
          </li>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faHistory} size='lg' />
              <span>History</span>
            </button>
          </li>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faPlayCircle} size='lg' />
              <span>Playlist</span>
            </button>
          </li>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faHeart} size='lg' />
              <span>Liked Videos</span>
            </button>
          </li>
        </ul>
      )}

      {/* "Explore" Section */}
      <h1 className={`pt-5 pb-2 ${isTextVisible ? '' : 'pl-2'} font-bold text-lg text-gray-700`} > Explore</h1>
      {isTextVisible && (
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faBolt} size='lg' />
              <span>Trending</span>
            </button>
          </li>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faShoppingBag} size='lg' />
              <span>Shopping</span>
            </button>
          </li>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faMusic} size='lg' />
              <span>Music</span>
            </button>
          </li>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faGamepad} size='lg' />
              <span>Gaming</span>
            </button>
          </li>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faNewspaper} size='lg' />
              <span>News</span>
            </button>
          </li>
          <li className='flex items-center'>
            <button className='flex items-center space-x-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg'>
              <FontAwesomeIcon icon={faFutbol} size='lg' />
              <span>Sports</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
