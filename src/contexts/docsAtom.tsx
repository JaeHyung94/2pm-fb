import { atom } from 'jotai';
import { IDocsTypes, IReReplyTypes, IReplyTypes } from '../db/docs';

export const DocsAtom = atom<IDocsTypes[]>([]);
export const ReplyAtom = atom<IReplyTypes[]>([]);
export const ReReplyAtom = atom<IReReplyTypes[]>([]);
