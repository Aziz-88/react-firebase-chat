import React from 'react';
import './detail.css'
const Detail = () => {
  return (
    <div className='Detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Abdulazeez</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy and Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt=""  />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://i.pinimg.com/564x/43/aa/4c/43aa4c6dc1c889fae76b7162c764ee82.jpg" alt="" />
              <span>photo-2024-2.png</span>
              </div>
            <img src="./download.png" alt="" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://i.pinimg.com/564x/43/aa/4c/43aa4c6dc1c889fae76b7162c764ee82.jpg" alt="" />
              <span>photo-2024-2.png</span>
              </div>
            <img src="./download.png" alt="" className='icon' />
            </div>
          
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://i.pinimg.com/564x/43/aa/4c/43aa4c6dc1c889fae76b7162c764ee82.jpg" alt="" />
              <span>photo-2024-2.png</span>
              </div>
            <img src="./download.png" alt="" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://i.pinimg.com/564x/43/aa/4c/43aa4c6dc1c889fae76b7162c764ee82.jpg" alt="" />
              <span>photo-2024-2.png</span>
              </div>
            <img src="./download.png" alt="" className='icon' />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block Uesr</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  );
}

export default Detail;
