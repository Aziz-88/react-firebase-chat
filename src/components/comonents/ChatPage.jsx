import React from 'react';
import Chat from "./chat/chat";
import List from "./list/list";
import Detail from "./detail/detail";
const ChatPage = () => {
  return (
    <>
      <List/>
      <Chat/>
      <Detail/>
    </>
  );
}

export default ChatPage;
