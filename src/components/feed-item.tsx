import React from 'react';
import { IDocsTypes } from '../db/docs';
import { Avatar } from './avatar';
import { timeForToday } from '../utils/timeForToday';
import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';
import { MdChatBubbleOutline } from 'react-icons/md';
import { IoIosShareAlt } from 'react-icons/io';
import { TextInput } from './text-input';
import { useLike } from '../hooks/useLike';
import { useAtomValue } from 'jotai';
import { UserAtom } from '../contexts/userAtom';
import { FeedReply } from './feed-reply';

interface IFeedItemProps {
  item: IDocsTypes;
}

export const FeedItem = ({ item }: IFeedItemProps): React.ReactElement => {
  const user = useAtomValue(UserAtom);
  const [handleLike] = useLike({
    docId: item.id,
    reactions: item.reactions,
  });

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
          {item.reply && item.reply.length > 0 ? (
            <h5 className="text-sm text-gray-500">
              댓글 {item.reply.length}개
            </h5>
          ) : (
            <></>
          )}
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
      <ul className="mt-2">
        {item.reply?.map((reply) => (
          <FeedReply key={reply.id} reply={reply} />
        ))}
      </ul>
      <div className="items-top mt-3 flex w-full pb-1">
        <Avatar size={'md'} />
        <TextInput isReply targetId={item.id} />
      </div>
    </li>
  );
};
