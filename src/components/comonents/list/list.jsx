
import ChatList from "./ChatList/ChatList"
import Userinfo from "./userinfo/userinfo"
import "./list.css"
const List = () => {
  return (
    <div className='List'>
      
      <Userinfo/>
      <ChatList/>
    </div>
  );
}

export default List;
