
import ChatPage from "./components/comonents/ChatPage";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/login/login";
import Notification from "./components/notification/notification";
import { Routes , Route } from "react-router-dom";

const App = () => {

  // const user = false;
  return (
    <div className='container'>

      
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/HomePage" element={<HomePage/>}/>
  <Route path="/ChatPage" element={<ChatPage/>}/>

         
  </Routes>  
    

      <Notification/>
    </div>
  )
}

export default App