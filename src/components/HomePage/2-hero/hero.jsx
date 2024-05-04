import { useState } from 'react';

import  './hero.css';
const Hero = () => {

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
  return (
    <section className='hero flex'>

<div className="item">
        <form> 
          <label htmlFor="file">
            <img className='avatar'   src={avatar.url || "./avatar.png"} alt="" />
          </label>
          <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
          <div>
          <h1  className='H1-title'> Abdulazeez Mohamed Ahmed Hadadi <p className='p-title'> Student : IT  <p className='p-title'> ID : 202009718  </p>  </p> </h1>
        </div>
          
        </form>
      </div>
    
    </section>
  );
}

export default Hero;
