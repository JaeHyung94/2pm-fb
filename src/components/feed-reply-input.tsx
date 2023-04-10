import React from 'react';
import { Avatar } from './avatar';
import { TextInput } from './text-input';

interface IFeedReplyInputProps {
  docId: string;
  replyId?: string;
  isReReply?: boolean;
  replyerName?: string;
}

export const FeedReplyInput = ({
  docId,
  replyId,
  isReReply,
  replyerName,
}: IFeedReplyInputProps): React.ReactElement => {
  return (
    <div className="items-top mt-3 flex w-full pb-1">
      <Avatar size={'md'} />
      <TextInput
        isReply={isReReply ? false : true}
        isReReply={isReReply ? true : false}
        targetId={docId}
        replyId={replyId}
        replyerName={replyerName}
      />
    </div>
  );
};
