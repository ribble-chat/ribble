export type Group = {
  id: number;
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
