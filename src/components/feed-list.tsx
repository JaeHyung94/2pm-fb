import React from 'react';
import { DOCS } from '../db/docs';
import { FeedItem } from './feed-item';

export const FeedList = (): React.ReactElement => {
  return (
    <ul className="max-w-xl">
      {DOCS.map((doc) => (
        <FeedItem item={doc} key={doc.id} />
      ))}
    </ul>
  );
};
