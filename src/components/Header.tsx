import React from 'react';
import nintendoIcon from '../assets/Nintendo.svg';

const Header = () => {
  return (
    <div className='w-full h-12 border-b'>
      <div className='grid w-24 h-full place-items-center bg-primary'>
        <img className='m-auto' src={nintendoIcon} alt='' />
      </div>
    </div>
  );
};

export default Header;
