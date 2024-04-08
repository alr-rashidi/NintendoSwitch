import React from 'react';
import nintendoIcon from '/src/assets/Nintendo.svg';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className='flex flex-row w-full h-12 border-b'>
      <div className='grid w-24 h-full place-items-center bg-primary'>
        <img className='m-auto' src={nintendoIcon} alt='' />
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
