import React from 'react';
import { IReplyTypes } from '../db/docs';
import { Avatar } from './avatar';
import { timeForToday } from '../utils/timeForToday';

interface IFeedReplyProps {
  reply: IReplyTypes;
}

export const FeedReply = ({ reply }: IFeedReplyProps): React.ReactElement => {
  return (
    <li key={reply.id} className="mt-2 flex items-start">
      <Avatar size="md" />
      <div className="ml-1">
        <div className="w-fit rounded-xl bg-gray-200 p-2">
          <h5 className="mb-1 text-sm font-bold">{reply.replyer.name}</h5>
          <h5 className="text-sm">{reply.content}</h5>
        </div>
        <div className="mt-1 flex pl-2">
          <h5 className="mr-4 text-xs font-bold text-gray-500">좋아요</h5>
          <h5 className="mr-4 text-xs font-bold text-gray-500">답글 달기</h5>
          <h5 className="text-xs text-gray-500">
            {timeForToday(reply.createdAt)}
          </h5>
        </div>
      </div>
    </li>
  );
};
