'use client';
import React from 'react';
import Image from 'next/image';
import MenuButton from './MenuButton';
import {RiArrowDropDownLine} from 'react-icons/ri';

const Navbar = () => {
  const menu = [
    'Services',
    'Pricing',
    'Our Aduits',
    'Tools',
    'Resources',
    'Refer-Earn-Secure',
  ];

  return (
    <nav className="flex items-center justify-between mx-16 py-4 border-b-2 border-[#ffffff0c] bg-hero bg-cover max-lg:mx-[6%] max-md:mx-2">
      <img
        className="max-lg:hidden"
        src="/assets/QuillAudits Logo.png"
        alt="Quill Audits"
      />
      <img
        className="hidden max-lg:block"
        src="/assets/QuillIcon.png"
        alt="Quill Audits"
      />
      <div className="flex items-center gap-6 max-lg:hidden">
        {menu.map((item, index) => (
          <p className="font-jost hover:underline cursor-pointer" key={index}>
            {item == 'Services' || item == 'Tools' || item == 'Resources' ? (
              <div className="flex items-center gap-0.25">
                {item}
                <RiArrowDropDownLine
                  className="translate-y-0.5"
                  size={'1.25rem'}
                />
              </div>
            ) : (
              item
            )}
          </p>
        ))}
      </div>
      <button className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 hover:bg-gradient-to-bl font-jost text-white font-medium py-2 px-4 rounded">
        Request An Audit
      </button>
      <div className="hidden max-lg:block">
        <MenuButton menu={menu} />
      </div>
    </nav>
  );
};

export default Navbar;
