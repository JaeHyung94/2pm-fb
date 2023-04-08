import React from 'react';
import {
  BsBellFill,
  BsFacebook,
  BsGrid3X3GapFill,
  BsMessenger,
  BsSearch,
} from 'react-icons/bs';
import { AiFillHome, AiOutlineYoutube } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineUsers, HiOutlineUserGroup } from 'react-icons/hi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { Avatar } from './avatar';

export const Header = (): React.ReactElement => {
  return (
    <header className="fixed grid h-14 w-full auto-cols-fr grid-cols-3 bg-white px-4 drop-shadow-md md:grid-cols-12">
      <section className="col-span-1 flex items-center md:col-span-2">
        <BsFacebook size={40} color="#0c8ef1" />
        <div className="ml-2 flex h-10 min-w-10 items-center justify-center rounded-full bg-gray-200">
          <BsSearch size={16} color="#65675b" className="xl:ml-2" />
          <button className="min-w-full hidden w-52 bg-transparent px-2 xl:block">
            <h5 className="text-left text-sm text-gray-700">Facebook 검색</h5>
          </button>
        </div>
      </section>
      <section className="hidden md:col-span-1 md:block" />
      <section className="col-span-1 flex gap-2 md:col-span-6 md:grid md:grid-cols-5">
        <button className="header_menu_btn border-b-4 border-fbblue">
          <div className="header_menu_btn">
            <AiFillHome size={24} color="#0c8ef1" />
          </div>
        </button>
        <button className="header_menu_btn py-1">
          <div className="header_menu_btn header_not_selected_btn">
            <HiOutlineUsers size={24} />
          </div>
        </button>
        <button className="header_menu_btn py-1">
          <div className="header_menu_btn header_not_selected_btn">
            <AiOutlineYoutube size={24} />
          </div>
        </button>
        <button className="header_menu_btn py-1">
          <div className="header_menu_btn header_not_selected_btn">
            <HiOutlineUserGroup size={24} />
          </div>
        </button>
        <button className="header_menu_btn py-1">
          <div className="header_menu_btn header_not_selected_btn">
            <IoGameControllerOutline size={24} />
          </div>
        </button>
        <button className="flex items-center justify-center md:hidden">
          <GiHamburgerMenu size={24} />
        </button>
      </section>
      <section className="hidden md:col-span-1 md:block" />
      <section className="col-span-1 flex flex-row items-center justify-end md:col-span-2">
        <button>
          <div className="header_round_btn">
            <BsGrid3X3GapFill size={20} />
          </div>
        </button>
        <button>
          <div className="header_round_btn ml-2">
            <BsMessenger size={20} />
          </div>
        </button>
        <button>
          <div className="header_round_btn ml-2">
            <BsBellFill size={20} />
          </div>
        </button>
        <div className="ml-2 flex h-9 w-9 items-center justify-center hover:opacity-80">
          <Avatar size={36} />
        </div>
      </section>
    </header>
  );
};
