export interface IDocsTypes {
  id: string;
  writer: {
    name: string;
    avatar: string | null;
    id: string;
  };
  content: string;
  reactions: number;
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
  reactions: number;
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
  reactions: number;
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
    reactions: 3,
    createdAt: new Date('2023-04-07T09:13:03'),
    updatedAt: new Date('2023-04-07T09:13:03'),
  },
  {
    id: 'CKnWKYs_M3JBwrY_OSfQy',
    writer: {
      name: 'Jay',
      avatar: null,
      id: 'FLfEpR07rY6LW_EULkAHu',
    },
    content: 'This is My Second Facebook Post',
    reactions: 0,
    createdAt: new Date('2023-04-07T09:13:03'),
    updatedAt: new Date('2023-04-07T09:13:03'),
  },
  {
    id: 'XCfrUdT6Mdz0RDoH-xmAe',
    writer: {
      name: 'Jay',
      avatar: null,
      id: 'FLfEpR07rY6LW_EULkAHu',
    },
    content: 'This is My Third Facebook Post',
    reactions: 38,
    createdAt: new Date('2023-04-07T09:13:03'),
    updatedAt: new Date('2023-04-07T09:13:03'),
  },
  {
    id: 'QsRIVCwREjrBm5jG4kwpI',
    writer: {
      name: 'Jay',
      avatar: null,
      id: 'FLfEpR07rY6LW_EULkAHu',
    },
    content: 'This is My Fourth Facebook Post',
    reactions: 3,
    createdAt: new Date('2023-04-07T09:13:03'),
    updatedAt: new Date('2023-04-07T09:13:03'),
  },
];
