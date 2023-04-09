import { useAtom, useAtomValue } from 'jotai';
import { DocsAtom } from '../contexts/docsAtom';
import { UserAtom } from '../contexts/userAtom';
import { IReplyTypes } from '../db/docs';

interface IUseReplyProps {
  docId: string;
  replyId?: string;
  content: string;
}

export const useReply = ({ docId, replyId, content }: IUseReplyProps) => {
  const [docs, setDocs] = useAtom(DocsAtom);
  const user = useAtomValue(UserAtom);

  const handleReply = () => {
    const newReplyInfo: IReplyTypes = {
      id: Math.random().toString(),
      replyer: {
        name: user.name,
        avatar: user.avatar,
        id: user.id,
      },
      content,
      reactions: [],
      docId: docId,
      rereply: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updatedDocs = docs.map((item) => {
      if (item.id === docId) {
        const newReplyList = (item.reply ?? []).concat([newReplyInfo]);
        return {
          ...item,
          reply: newReplyList,
        };
      } else {
        return item;
      }
    });

    localStorage.setItem('2pmdocs', JSON.stringify(updatedDocs));
    setDocs(updatedDocs);
  };

  return [handleReply];
};
