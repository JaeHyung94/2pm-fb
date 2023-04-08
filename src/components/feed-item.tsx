import React from 'react';
import { IDocsTypes } from '../db/docs';
import { Avatar } from './avatar';
import { timeForToday } from '../utils/timeForToday';
import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';
import { MdChatBubbleOutline } from 'react-icons/md';
import { IoIosShareAlt } from 'react-icons/io';

interface IFeedItemProps {
  item: IDocsTypes;
}

export const FeedItem = ({ item }: IFeedItemProps): React.ReactElement => {
  return (
    <li className="my-3 rounded-md bg-white px-4 pt-3 shadow-md">
      <div className="mb-2 flex items-center">
        <Avatar url={item.writer.avatar ?? undefined} size={'md'} />
        <div className="ml-2">
          <h4 className="text-sm font-semibold">{item.writer.name}</h4>
          <h4 className="text-xs text-gray-400">
            {timeForToday(item.createdAt)}
          </h4>
        </div>
      </div>
      <div className="border-b border-gray-300">
        <h3 className="pb-3 font-light">{item.content}</h3>
        <div>
          {item.reactions && item.reactions > 0 ? (
            <div className="flex items-center pb-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-fbblue">
                <HiThumbUp size={12} color="white" />
              </div>
              <h5 className="ml-1 text-sm text-gray-600">{item.reactions}</h5>
            </div>
          ) : (
            <></>
          )}
          {item.reply && item.reply.length > 0 ? (
            <div>
              <h5>{item.reply.length}</h5>
              <MdChatBubbleOutline />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ul className="flex items-center justify-between py-1">
        <li className="flex w-1/3 items-center justify-center rounded-md py-2 transition ease-in-out hover:bg-gray-200">
          <HiOutlineThumbUp size={24} color="#59626b" />
          <h4 className="ml-2 text-gray-500">좋아요</h4>
        </li>
        <li className="flex w-1/3 items-center justify-center rounded-md py-2 transition ease-in-out hover:bg-gray-200">
          <MdChatBubbleOutline size={24} color="#59626b" />
          <h4 className="ml-2 text-gray-500">댓글달기</h4>
        </li>
        <li className="flex w-1/3 items-center justify-center rounded-md py-2 transition ease-in-out hover:bg-gray-200">
          <IoIosShareAlt size={24} color="#59626b" />
          <h4 className="ml-2 text-gray-500">공유하기</h4>
        </li>
      </ul>
    </li>
  );
};
