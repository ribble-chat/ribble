export type Group = {
  guid: string;
  name: string;
  picture: string;
};

export type Msg = {
  id: number;
  from: string;
  to: string;
  content: string;
  time?: number;
};
