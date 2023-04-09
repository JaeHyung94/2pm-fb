import React from 'react';
import { IDocsTypes } from '../db/docs';
import { FeedDoc } from './feed-doc';
import { FeedReplyList } from './feed-reply-list';
import { FeedReplyInput } from './feed-reply-input';

interface IFeedItemProps {
  item: IDocsTypes;
}

export const FeedItem = ({ item }: IFeedItemProps): React.ReactElement => {
  return (
    <li className="my-3 rounded-md bg-white px-4 pt-3 shadow-md">
      <FeedDoc item={item} />
      <FeedReplyList docId={item.id} />
      <FeedReplyInput docId={item.id} />
    </li>
  );
};
