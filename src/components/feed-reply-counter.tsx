import { useAtomValue } from 'jotai';
import React from 'react';
import { ReplyAtom } from '../contexts/docsAtom';

interface IFeedReplyCounterProps {
  docId: string;
}

export const FeedReplyCounter = ({
  docId,
}: IFeedReplyCounterProps): React.ReactElement => {
  const replyList = useAtomValue(ReplyAtom);
  return (
    <>
      {replyList.filter((reply) => reply.docId === docId).length > 0 ? (
        <h5 className="text-sm text-gray-500">
          댓글 {replyList.filter((reply) => reply.docId === docId).length}개
        </h5>
      ) : (
        <></>
      )}
    </>
  );
};
