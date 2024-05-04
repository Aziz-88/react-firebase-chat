import "./main.css";
import { Link } from "react-router-dom";



const Main = () => {

  return (
    <main className="my-main flix">
      {/* ====================================================
            the lift div for button 
==================================================== */}
      <div className="left-div flix ">
        {/* ====================================================
            button 1 > Chats
==================================================== */}
        <div className="button-coulm">
          <Link to="/ChatPage">
          <button >
            <h3>Chats</h3>
            <span className="icon-chat name-card"></span>
          </button>
</Link>
          {/* ====================================================
            button 2 > coursrs
==================================================== */}

          <button>
            <h2>Courses</h2>
            <span className="icon-book-open name-card"></span>
          </button>
        </div>

        {/* ====================================================
            button 3 > Communities
==================================================== */}
        <div className="button-coulm">
          <button>
            <h2>Communities</h2>
            <span className="icon-users name-card"></span>
          </button>
          {/* ====================================================
            button 4 >   Activities
==================================================== */}

          <button>
            <h2>Activities</h2>
            <span className="icon-bar-chart-2 name-card"></span>
          </button>
        </div>
      </div> 

      <div className="right-div">

        <img className="LOGO" src="LOGO.png" alt="" />

      </div>
    </main>
  );
};

export default Main;
