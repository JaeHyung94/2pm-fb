import { useAtom, useAtomValue } from 'jotai';
import { DocsAtom, ReplyAtom } from '../contexts/docsAtom';
import { UserAtom } from '../contexts/userAtom';
import { IReplyTypes } from '../db/docs';

interface IUseReplyProps {
  docId: string;
  replyId?: string;
  content: string;
}

export const useReply = ({ docId, replyId, content }: IUseReplyProps) => {
  const [replies, setReplies] = useAtom(ReplyAtom);
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

    // const updatedDocs = docs.map((item) => {
    //   if (item.id === docId) {
    //     const newReplyList = (item.reply ?? []).concat([newReplyInfo]);
    //     return {
    //       ...item,
    //       reply: newReplyList,
    //     };
    //   } else {
    //     return item;
    //   }
    // });

    const newReply = replies.concat([newReplyInfo]);

    localStorage.setItem('2pmreply', JSON.stringify(newReply));
    setReplies(newReply);
  };

  return [handleReply];
};
