import { useAtomValue } from 'jotai';
import React, { useState } from 'react';
import { ReplyAtom } from '../contexts/docsAtom';
import { FeedReply } from './feed-reply';

interface IFeedReplyListProps {
  docId: string;
}

export const FeedReplyList = ({
  docId,
}: IFeedReplyListProps): React.ReactElement => {
  const replyList = useAtomValue(ReplyAtom);
  const [showReplyMenu, setShowReplyMenu] = useState<string | null>(null);

  return (
    <ul className="mt-2">
      {replyList
        .filter((item) => item.docId === docId)
        .map((reply) => (
          <FeedReply
            key={reply.id}
            reply={reply}
            showMenu={showReplyMenu === reply.id}
            setShowMenu={setShowReplyMenu}
          />
        ))}
    </ul>
  );
};
