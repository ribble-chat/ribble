import React from "react";

type Props = {
  me: string;
};

type Msg = {
  from: string;
  to: string;
  content: string;
};

const ChatBox: React.FC<Props> = ({ me }) => {
  const messages: Msg[] = [
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "<3",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "<3",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "<3",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "thanks hehe",
    },
    {
      from: "Jennifer",
      to: "Nibbles",
      content: "ok omw!",
    },
    {
      from: "Nibbles",
      to: "Jennifer",
      content: "can you please feed me :(",
    },
  ];
  return (
    <div>
      {messages.map(message =>
        me === message.from ? <div>me</div> : <div>you</div>
      )}
    </div>
  );
};

export default ChatBox;
