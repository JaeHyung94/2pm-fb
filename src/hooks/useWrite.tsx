import { useAtom, useAtomValue } from 'jotai';
import { DocsAtom } from '../contexts/docsAtom';
import { IDocsTypes } from '../db/docs';
import { UserAtom } from '../contexts/userAtom';

interface IUseWriteProps {
  content: string;
}

export const useWrite = ({ content }: IUseWriteProps) => {
  const [docs, setDocs] = useAtom(DocsAtom);
  const user = useAtomValue(UserAtom);

  const handleWrite = () => {
    const newDocInfo: IDocsTypes = {
      id: `${Math.random()}`,
      writer: {
        name: user.name,
        avatar: user.avatar,
        id: user.id,
      },
      content,
      reactions: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newDocList = [newDocInfo, ...docs];

    localStorage.setItem('2pmdocs', JSON.stringify(newDocList));
    setDocs(newDocList);
  };

  return [handleWrite];
};
