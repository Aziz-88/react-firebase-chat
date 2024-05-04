import { useEffect, useRef , useState } from "react"
import "./chat.css"
import EmojiPicker from 'emoji-picker-react';
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    
  endRef.current?.scrollIntoView( { behavior:"smooth" } )
  }, []);

  const hendleEmoji = e => {
    setText(prev => prev + e.emoji);
    setOpen(false)
  }
  console.log(text)
  return (
    <div className='Chat'>

{/* spac for top to name chating */}

      <div className="top">

        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>Osama Khalied</span>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>

        <div className="icon">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

{/* spac for chat */}
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab quo necessitatibus a et sunt aliquam neque, ducimus facere deleniti?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab quo necessitatibus a et sunt aliquam neque, ducimus facere deleniti?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab quo necessitatibus a et sunt aliquam neque, ducimus facere deleniti?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab quo necessitatibus a et sunt aliquam neque, ducimus facere deleniti?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab quo necessitatibus a et sunt aliquam neque, ducimus facere deleniti?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
          <img src="https://i.pinimg.com/736x/5f/6f/80/5f6f8021f04b3f6c15429479cc6c2308.jpg" alt="" />

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab quo necessitatibus a et sunt aliquam neque, ducimus facere deleniti?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab quo necessitatibus a et sunt aliquam neque, ducimus facere deleniti?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

{/* spac for text and send */}

      <div className="bottom">
        <div className="icon">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a messag...'
        value={text}
         onChange={e => setText(e.target.value)} />
        <div className="eomji-container">
          <img className='emoji' src="./emoji.png" alt="" onClick={()=> setOpen(prev=> ! prev)} />
          <div className="picker">

          <EmojiPicker open={open} onEmojiClick={hendleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  );
}

export default Chat;
