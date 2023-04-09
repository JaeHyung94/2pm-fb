import React from 'react';
import { Avatar } from './avatar';
import { IDocsTypes } from '../db/docs';
import { timeForToday } from '../utils/timeForToday';
import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';
import { useAtomValue } from 'jotai';
import { UserAtom } from '../contexts/userAtom';
import { useLike } from '../hooks/useLike';
import { MdChatBubbleOutline } from 'react-icons/md';
import { IoIosShareAlt } from 'react-icons/io';
import { FeedReplyCounter } from './feed-reply-counter';

interface IFeedDocProps {
  item: IDocsTypes;
}

export const FeedDoc = ({ item }: IFeedDocProps) => {
  const user = useAtomValue(UserAtom);
  const [handleLike] = useLike({
    docId: item.id,
    reactions: item.reactions,
  });

  return (
    <>
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
        <div className="flex items-center justify-between pb-2">
          {item.reactions && item.reactions.length > 0 ? (
            <div className="flex items-center">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-fbblue">
                <HiThumbUp size={12} color="white" />
              </div>
              <h5 className="ml-1 text-sm text-gray-600">
                {item.reactions.length}
              </h5>
            </div>
          ) : (
            <></>
          )}
          <FeedReplyCounter docId={item.id} />
        </div>
      </div>
      <ul className="flex items-center justify-between border-b border-gray-300 py-1">
        <li className="flex w-1/3 justify-center rounded-md py-2 transition ease-in-out hover:bg-gray-200">
          <button
            className="flex items-center justify-center"
            onClick={() => handleLike()}
          >
            {item.reactions.includes(user.id) ? (
              <HiThumbUp size={24} color="#006de9" />
            ) : (
              <HiOutlineThumbUp size={24} color="#59626b" />
            )}
            <h4
              className={`ml-2 ${
                item.reactions.includes(user.id)
                  ? 'font-semibold text-fbblue'
                  : 'text-gray-500'
              }`}
            >
              좋아요
            </h4>
          </button>
        </li>
        <li className="flex w-1/3 justify-center rounded-md py-2 transition ease-in-out hover:bg-gray-200">
          <button className="flex items-center justify-center">
            <MdChatBubbleOutline size={24} color="#59626b" />
            <h4 className="ml-2 text-gray-500">댓글달기</h4>
          </button>
        </li>
        <li className="flex w-1/3 justify-center rounded-md py-2 transition ease-in-out hover:bg-gray-200">
          <button className="flex items-center justify-center">
            <IoIosShareAlt size={24} color="#59626b" />
            <h4 className="ml-2 text-gray-500">공유하기</h4>
          </button>
        </li>
      </ul>
    </>
  );
};
