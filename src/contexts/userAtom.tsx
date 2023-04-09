import { atom } from 'jotai';

interface IUserTypes {
  id: string;
  name: string;
  avatar: string | null;
}

export const UserAtom = atom<IUserTypes>({
  id: '2pmlab',
  name: '두시랩',
  avatar: null,
});
