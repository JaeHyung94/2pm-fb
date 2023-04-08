import React, { useState } from 'react';
import { Avatar } from './avatar';
import { FaUserFriends } from 'react-icons/fa';
import {
  AiFillFlag,
  AiFillStar,
  AiOutlineFieldTime,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { GiBackwardTime } from 'react-icons/gi';
import { SiHiveBlockchain } from 'react-icons/si';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoLogoGameControllerA,
} from 'react-icons/io';
import {
  BsBarChartFill,
  BsBookmarkFill,
  BsFillCalendarFill,
} from 'react-icons/bs';

interface ILeftSideMenuProps {
  id: number;
  icon: React.ReactElement;
  title: string;
  background?: boolean;
}

const SideMenus: ILeftSideMenuProps[] = [
  {
    id: 1,
    icon: <FaUserFriends size={24} color="#1a7be9" />,
    title: '친구',
  },
  {
    id: 2,
    icon: <AiOutlineFieldTime size={28} color="#1a7be9" />,
    title: '최신',
  },
  {
    id: 3,
    icon: <HiUserGroup size={24} color="#39b9bd" />,
    title: '그룹',
    background: true,
  },
  {
    id: 4,
    icon: <AiOutlineYoutube size={28} color="#39b9bd" />,
    title: 'Watch',
  },
  {
    id: 5,
    icon: <GiBackwardTime size={28} color="#39b9bd" />,
    title: '과거의 오늘',
  },
  {
    id: 6,
    icon: <BsBookmarkFill size={20} color="#a033b7" />,
    title: '저장됨',
  },
  {
    id: 7,
    icon: <AiFillFlag size={20} color="#e56129" />,
    title: '페이지',
  },
  {
    id: 8,
    icon: <BsFillCalendarFill size={20} color="#e23856" />,
    title: '이벤트',
  },
  {
    id: 9,
    icon: <AiFillStar size={28} color="#eab939" />,
    title: '즐겨찾기',
  },
  {
    id: 10,
    icon: <SiHiveBlockchain size={24} color="#39b9bd" />,
    title: '게임 동영상',
  },
  {
    id: 11,
    icon: <IoLogoGameControllerA size={28} color="#1a7be9" />,
    title: '게임하기',
  },
  {
    id: 12,
    icon: <BsBarChartFill size={28} color="#1a7be9" />,
    title: '광고 관리자',
  },
];

export const LeftSideBar = (): React.ReactElement => {
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <nav className="hidden lg:block lg:w-1/4">
      <section className="mx-2 border-b border-gray-300 px-1 pb-2 pt-3">
        <ul>
          <li className="flex items-center rounded-md py-1 transition ease-in-out hover:bg-gray-200">
            <div className="flex h-9 w-9 items-center justify-center">
              <Avatar size={28} />
            </div>
            <h3 className="ml-2 text-sm">두시랩</h3>
          </li>
          {SideMenus.slice(0, showAll ? undefined : 9).map((item) => (
            <li
              key={item.id}
              className="flex items-center rounded-md py-1 transition ease-in-out hover:bg-gray-200"
            >
              <i className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                {item.icon}
              </i>
              <h5 className="text-sm">{item.title}</h5>
            </li>
          ))}
          <li className="rounded-md py-1 transition ease-in-out hover:bg-gray-200">
            <button
              className="flex items-center"
              onClick={() => setShowAll(!showAll)}
            >
              <i className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                {showAll ? (
                  <IoIosArrowDropupCircle size={28} color="#d8dade" />
                ) : (
                  <IoIosArrowDropdownCircle size={28} color="#d8dade" />
                )}
              </i>
              <h5 className="text-sm">{showAll ? '적게 보기' : '더 보기'}</h5>
            </button>
          </li>
        </ul>
      </section>
      <section className="mx-2 px-1 pb-2 pt-3">
        <h3 className="text-lg text-gray-500">내 바로가기</h3>
      </section>
    </nav>
  );
};
