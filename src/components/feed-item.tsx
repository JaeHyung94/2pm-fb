import React, { useState } from 'react';
import { IDocsTypes } from '../db/docs';
import { FeedDoc } from './feed-doc';
import { FeedReplyList } from './feed-reply-list';
import { FeedReplyInput } from './feed-reply-input';
import { ModalPortal } from './modal-portal';
import { DocModal } from './doc-modal';

interface IFeedItemProps {
  item: IDocsTypes;
}

export const FeedItem = ({ item }: IFeedItemProps): React.ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <li className="my-3 rounded-md bg-white px-4 pt-3 shadow-md">
      <FeedDoc item={item} setShowModal={setShowModal} />
      <FeedReplyList docId={item.id} />
      <FeedReplyInput docId={item.id} />
      {showModal && (
        <ModalPortal setOpenPortal={setShowModal}>
          <DocModal doc={item} />
        </ModalPortal>
      )}
    </li>
  );
};
