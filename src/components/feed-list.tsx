import React from 'react';
import { FeedItem } from './feed-item';
import { useAtomValue } from 'jotai';
import { DocsAtom } from '../contexts/docsAtom';

export const FeedList = (): React.ReactElement => {
  const docList = useAtomValue(DocsAtom);

  return (
    <ul>
      {docList.map((doc) => (
        <FeedItem item={doc} key={doc.id} />
      ))}
    </ul>
  );
};
