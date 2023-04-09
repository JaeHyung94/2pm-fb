export interface IDocsTypes {
  id: string;
  writer: {
    name: string;
    avatar: string | null;
    id: string;
  };
  content: string;
  reactions: string[];
  reply?: IReplyTypes[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IReplyTypes {
  id: string;
  replyer: {
    name: string;
    avatar: string | null;
    id: string;
  };
  content: string;
  reactions: string[];
  docId: string;
  rereply?: IReReplyTypes[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IReReplyTypes {
  id: string;
  rereplyer: {
    name: string;
    avatar: string | null;
    id: string;
  };
  content: string;
  reactions: string[];
  replyId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const DOCS: IDocsTypes[] = [
  {
    id: 'Tw2JHPplhPvNN7qyFERxq',
    writer: {
      name: 'Jay',
      avatar: require('../assets/images/jay.jpg'),
      id: 'FLfEpR07rY6LW_EULkAHu',
    },
    content: 'This is My First Facebook Post',
    reactions: ['1', '2'],
    createdAt: new Date('2023-04-07T09:13:03'),
    updatedAt: new Date('2023-04-07T09:13:03'),
  },
  {
    id: 'CKnWKYs_M3JBwrY_OSfQy',
    writer: {
      name: 'Park',
      avatar: null,
      id: 'FLfEpR07rY6LW_EULkAHu',
    },
    content: 'This is My Second Facebook Post',
    reactions: [],
    createdAt: new Date('2023-04-07T09:13:03'),
    updatedAt: new Date('2023-04-07T09:13:03'),
  },
  {
    id: 'XCfrUdT6Mdz0RDoH-xmAe',
    writer: {
      name: 'Kim',
      avatar: null,
      id: 'FLfEpR07rY6LW_EULkAHu',
    },
    content: 'This is My Third Facebook Post',
    reactions: ['1', '2', '3', '4'],
    createdAt: new Date('2023-04-07T09:13:03'),
    updatedAt: new Date('2023-04-07T09:13:03'),
  },
  {
    id: 'QsRIVCwREjrBm5jG4kwpI',
    writer: {
      name: 'Chio',
      avatar: null,
      id: 'FLfEpR07rY6LW_EULkAHu',
    },
    content: 'This is My Fourth Facebook Post',
    reactions: ['1', '2', '3', '4', '5'],
    createdAt: new Date('2023-04-07T09:13:03'),
    updatedAt: new Date('2023-04-07T09:13:03'),
  },
];
