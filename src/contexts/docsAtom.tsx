import { atom } from 'jotai';
import { IDocsTypes } from '../db/docs';

export const DocsAtom = atom<IDocsTypes[]>([]);
