import React from 'react';
import { Avatar } from './avatar';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { MdTagFaces } from 'react-icons/md';
import { FaPhotoVideo } from 'react-icons/fa';

export const FeedEditor = (): React.ReactElement => {
  return (
    <section className=" max-h-fit max-w-xl rounded-md bg-white px-4 shadow-md">
      <div className="flex items-center border-b border-gray-300 py-3">
        <Avatar size={'lg'} />
        <div className="ml-2 w-full rounded-full bg-gray-200 px-4 py-2 text-gray-600">
          두시랩님, 무슨 생각을 하고 계신가요?
        </div>
      </div>
      <ul className="mt-2 flex items-center justify-between px-6 pb-3">
        <li className="flex items-center">
          <BsFillCameraVideoFill size={24} color="#f02848" />
          <h4 className="ml-2 text-sm text-gray-500">라이브 방송</h4>
        </li>
        <li className="flex items-center">
          <FaPhotoVideo size={24} color="#42b35d" />
          <h4 className="ml-2 text-sm text-gray-500">사진/동영상</h4>
        </li>
        <li className="flex items-center">
          <MdTagFaces size={24} color="#ebb026" />
          <h4 className="ml-2 text-sm text-gray-500">기분/활동</h4>
        </li>
      </ul>
    </section>
  );
};
