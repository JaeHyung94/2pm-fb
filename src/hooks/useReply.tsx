import { useAtom, useAtomValue } from 'jotai';
import { ReReplyAtom, ReplyAtom } from '../contexts/docsAtom';
import { UserAtom } from '../contexts/userAtom';
import { IReReplyTypes, IReplyTypes } from '../db/docs';

interface IUseReplyProps {
  docId: string;
  replyId?: string;
  content: string;
}

export const useReply = ({ docId, replyId, content }: IUseReplyProps) => {
  const [replies, setReplies] = useAtom(ReplyAtom);
  const [reReplies, setReReplies] = useAtom(ReReplyAtom);
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

    const newReply = replies.concat([newReplyInfo]);

    localStorage.setItem('2pmreply', JSON.stringify(newReply));
    setReplies(newReply);
  };

  const handleReReply = () => {
    if (!replyId) {
      return;
    }
    const newReReplyInfo: IReReplyTypes = {
      id: `${Math.random()}`,
      rereplyer: {
        name: user.name,
        avatar: user.avatar,
        id: user.id,
      },
      content,
      reactions: [],
      replyId: replyId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newReReply = reReplies.concat([newReReplyInfo]);

    localStorage.setItem('2pmrereply', JSON.stringify(newReReply));
    setReReplies(newReReply);
  };

  return [handleReply, handleReReply];
};
