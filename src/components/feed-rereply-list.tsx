import { useAtomValue } from 'jotai';
import React from 'react';
import { ReReplyAtom } from '../contexts/docsAtom';
import { FeedReReply } from './feed-rereply';

interface IFeedReReplyListProps {
  replyId: string;
  setReReplyMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FeedReReplyList = ({
  replyId,
  setReReplyMode,
}: IFeedReReplyListProps): React.ReactElement => {
  const reReplyList = useAtomValue(ReReplyAtom);

  return (
    <ul className="ml-9">
      {reReplyList
        .filter((item) => item.replyId === replyId)
        .map((rereply) => (
          <FeedReReply
            key={rereply.id}
            rereply={rereply}
            setReReplyMode={setReReplyMode}
          />
        ))}
    </ul>
  );
};
