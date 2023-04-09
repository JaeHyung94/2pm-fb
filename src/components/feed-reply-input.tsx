import React from 'react';
import { Avatar } from './avatar';
import { TextInput } from './text-input';

interface IFeedReplyInputProps {
  docId: string;
}

export const FeedReplyInput = ({
  docId,
}: IFeedReplyInputProps): React.ReactElement => {
  return (
    <div className="items-top mt-3 flex w-full pb-1">
      <Avatar size={'md'} />
      <TextInput isReply targetId={docId} />
    </div>
  );
};
