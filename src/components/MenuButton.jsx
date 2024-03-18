'use client';

import React, {useState} from 'react';
import {FiMenu} from 'react-icons/fi';
const MenuButton = ({menu}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 rounded-md outline-none transition-all duration-500"
        onClick={togglePopover}>
        <FiMenu color="white" />
      </button>
      <div
        className="absolute z-20 w-[20rem] bg-hero backdrop-blur-sm
        transition-all duration-500 shadow-pulseblock top-[65%] right-[65%] rounded-md">
        {isOpen &&
          menu.map((item, index) => (
            <p
              className="font-jost text-white px-4 py-2 cursor-pointer hover:underline"
              key={index}>
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default MenuButton;
