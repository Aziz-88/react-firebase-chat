import { Link } from "react-router-dom";
import {useState} from 'react';
import "./login.css";
const Login = () => {

  const [avatar, setAvatar] = useState({
    file:null,
    url:""
  });

  const handleAvatar = e => {
    if(e.target.files[0]){

  
  setAvatar({
    file:e.target.files[0],
    url: URL.createObjectURL(e.target.files[0])
  })
}
  }

  const handleLogin = e => {
    e.preventDefult()
    
  }
  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}> 
          <input type="text" placeholder='ID Student'  name='email'/>
          <input type="password" placeholder='Password'  name='password'/>
          <Link to="/HomePage">
        <button>Sign In </button>
</Link>
          
        </form>
        
      </div>
      

    </div>
  );
}

export default Login;
