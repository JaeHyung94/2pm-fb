import { useAtom, useAtomValue } from 'jotai';
import { DocsAtom, ReplyAtom } from '../contexts/docsAtom';
import { UserAtom } from '../contexts/userAtom';

interface IHandleLikeProps {
  docId: string;
  replyId?: string;
  rereplyId?: string;
  reactions: string[];
}

export const useLike = ({
  docId,
  replyId,
  rereplyId,
  reactions,
}: IHandleLikeProps) => {
  const [docs, setDocs] = useAtom(DocsAtom);
  const [replies, setReplies] = useAtom(ReplyAtom);
  const user = useAtomValue(UserAtom);

  let newReaction: string[] = [];

  if (reactions.includes(user.id)) {
    newReaction = reactions.filter((item) => item !== user.id);
  } else {
    newReaction = [...reactions, user.id];
  }

  const handleLike = () => {
    const newDocs = docs.map((item) => {
      if (item.id === docId) {
        return {
          ...item,
          reactions: newReaction,
        };
      } else {
        return item;
      }
    });

    localStorage.setItem('2pmdocs', JSON.stringify(newDocs));
    setDocs(newDocs);
  };

  const handleReplyLike = () => {
    const newReply = replies.map((reply) => {
      if (reply.id === replyId) {
        return {
          ...reply,
          reactions: newReaction,
        };
      } else {
        return reply;
      }
    });

    localStorage.setItem('2pmreply', JSON.stringify(newReply));
    setReplies(newReply);
  };

  return [handleLike, handleReplyLike];
};
