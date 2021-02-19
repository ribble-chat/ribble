export type Group = {
  id: string;
  name: string;
  userIds: number[];
  picture?: string;
};

export type Msg = {
  id: number;
  from: string;
  to: string;
  content: string;
  time?: number;
};
