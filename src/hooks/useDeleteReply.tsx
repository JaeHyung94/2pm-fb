import { useAtom } from 'jotai';
import { ReReplyAtom, ReplyAtom } from '../contexts/docsAtom';

interface IUseDeleteReplyProps {
  targetId: string;
}

export const useDeleteReply = ({ targetId }: IUseDeleteReplyProps) => {
  const [replies, setReplies] = useAtom(ReplyAtom);
  const [rereplies, setRereplies] = useAtom(ReReplyAtom);

  const handleDeleteReply = () => {
    const newReplies = replies.filter((item) => item.id !== targetId);
    const newRereplies = rereplies.filter((item) => item.replyId !== targetId);
    localStorage.setItem('2pmreply', JSON.stringify(newReplies));
    localStorage.setItem('2pmrereply', JSON.stringify(newRereplies));
    setReplies(newReplies);
    setRereplies(newRereplies);
  };

  const handleDeleteReReply = () => {
    const newReReplies = rereplies.filter((item) => item.id !== targetId);
    localStorage.setItem('2pmrereply', JSON.stringify(newReReplies));
    setRereplies(newReReplies);
  };

  return [handleDeleteReply, handleDeleteReReply];
};
