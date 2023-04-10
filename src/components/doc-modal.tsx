import React from 'react';
import { FeedDoc } from './feed-doc';
import { IDocsTypes } from '../db/docs';
import { FeedReplyList } from './feed-reply-list';
import { FeedReplyInput } from './feed-reply-input';

interface IDocModalProps {
  doc: IDocsTypes;
}

export const DocModal = ({ doc }: IDocModalProps): React.ReactElement => {
  return (
    <>
      <div className="border-b border-gray-200">
        <h2 className="py-4 text-center text-xl font-bold">
          {doc.writer.name}님의 게시물
        </h2>
      </div>
      <div className="mt-2 px-3">
        <div className="max-h-[32rem] overflow-y-scroll">
          <FeedDoc item={doc} />
          <FeedReplyList docId={doc.id} />
        </div>
        <FeedReplyInput docId={doc.id} isModal={true} />
      </div>
    </>
  );
};
