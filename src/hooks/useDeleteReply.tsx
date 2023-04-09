import { useAtom } from 'jotai';
import { ReplyAtom } from '../contexts/docsAtom';

interface IUseDeleteReplyProps {
  targetId: string;
}

export const useDeleteReply = ({ targetId }: IUseDeleteReplyProps) => {
  const [replies, setReplies] = useAtom(ReplyAtom);

  const handleDeleteReply = () => {
    const newReplies = replies.filter((item) => item.id !== targetId);
    localStorage.setItem('2pmreply', JSON.stringify(newReplies));
    setReplies(newReplies);
  };

  return [handleDeleteReply];
};
