import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdSearch } from 'react-icons/md';

const SearchBar = () => {
  const [showCategoriesList, setShowCategoriesList] = useState(false);

  const toggleShowCategoriesList = () => {
    setShowCategoriesList((value) => !value);
  };

  return (
    <div className='relative p-1'>
      <input
        type='text'
        className='h-full px-8 text-sm border-b border-gray-700 w-86'
        placeholder='Search'
      />
      <MdSearch className='absolute top-0 w-6 h-full text-gray-700' />
      <div
        className='absolute right-0 flex flex-row items-center text-xs font-bold text-gray-600 cursor-pointer inset-y-2'
        onClick={toggleShowCategoriesList}>
        <option value='all'>All categories</option>
        <div
          className={`absolute top-10 w-40 bg-white rounded-xl overflow-hidden shadow-lg gap-2 cursor-default ${showCategoriesList ? '' : 'hidden'} -translate-x-1/2 bg-transparent outline-none appearance-none left-1/2`}>
          <div className='px-2 py-1.5 cursor-pointer hover:bg-gray-200'>All categories</div>
          <div className='px-2 py-1.5 cursor-pointer hover:bg-gray-200'>Games</div>
          <div className='px-2 py-1.5 cursor-pointer hover:bg-gray-200'>Hardware</div>
          <div className='px-2 py-1.5 cursor-pointer hover:bg-gray-200'>Merchandise</div>
          <div className='px-2 py-1.5 cursor-pointer hover:bg-gray-200'>News and Events</div>
          <div className='px-2 py-1.5 cursor-pointer hover:bg-gray-200'>Support</div>
        </div>
        <MdKeyboardArrowDown className='text-3xl' />
      </div>
    </div>
  );
};

export default SearchBar;
