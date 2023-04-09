import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { IReplyTypes } from '../db/docs';
import { Avatar } from './avatar';
import { timeForToday } from '../utils/timeForToday';
import { useAtomValue } from 'jotai';
import { UserAtom } from '../contexts/userAtom';
import { useLike } from '../hooks/useLike';
import { HiThumbUp } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';

interface IFeedReplyProps {
  reply: IReplyTypes;
  showMenu: boolean;
  setShowMenu: React.Dispatch<SetStateAction<string | null>>;
}

export const FeedReply = ({
  reply,
  showMenu,
  setShowMenu,
}: IFeedReplyProps): React.ReactElement => {
  const menuRef = useRef<HTMLDivElement>(null);

  const user = useAtomValue(UserAtom);
  const [, handleReplyLike] = useLike({
    docId: reply.docId,
    replyId: reply.id,
    reactions: reply.reactions,
  });

  return (
    <li key={reply.id} className="group relative mt-2 flex items-start">
      <Avatar size="md" />
      <div className="ml-1">
        <div className="flex items-center">
          <div className="relative w-fit rounded-xl bg-gray-200 p-2">
            <h5 className="mb-1 text-sm font-bold">{reply.replyer.name}</h5>
            <h5 className="text-sm">{reply.content}</h5>
            <div
              className={`${
                reply.reactions.includes(user.id) ? 'block' : 'hidden'
              } absolute -right-3 bottom-2 w-fit rounded-full border border-gray-200 bg-fbblue p-0.5`}
            >
              <HiThumbUp size={14} color="white" />
            </div>
          </div>
          {reply.replyer.id === user.id && (
            <button
              className="invisible ml-2 rounded-full p-2 transition ease-in-out hover:bg-gray-200 group-hover:visible"
              onClick={() => setShowMenu(reply.id)}
            >
              <FiMoreHorizontal />
            </button>
          )}
          {showMenu && (
            <div
              ref={menuRef}
              className="max-w-32 absolute top-10 z-10 w-2/3 rounded-md bg-white p-1 shadow-xl shadow-slate-500 "
            >
              <button className="w-full rounded-md px-1 py-1 hover:bg-gray-200">
                삭제
              </button>
            </div>
          )}
        </div>
        <div className="mt-1 flex pl-2">
          <button onClick={() => handleReplyLike()}>
            <h5
              className={`mr-4 text-xs font-bold ${
                reply.reactions.includes(user.id)
                  ? 'text-fbblue'
                  : 'text-gray-500'
              }`}
            >
              좋아요
            </h5>
          </button>
          <button>
            <h5 className="mr-4 text-xs font-bold text-gray-500">답글 달기</h5>
          </button>
          <h5 className="text-xs text-gray-500">
            {timeForToday(reply.createdAt)}
          </h5>
        </div>
      </div>
    </li>
  );
};
