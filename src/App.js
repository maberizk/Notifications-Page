import "./App.css";
import markImg from "./images/avatar-mark-webber.webp";
import angelaImg from "./images/avatar-angela-gray.webp";
import jacobImg from "./images/avatar-jacob-thompson.webp";
import rizkyImg from "./images/avatar-rizky-hasanuddin.webp";
import kimImg from "./images/avatar-kimberly-smith.webp";
import nathanImg from "./images/avatar-nathan-peterson.webp";
import annaImg from "./images/avatar-anna-kim.webp";
import chessPicture from "./images/image-chess.webp";

function App() {
  return (
    <div className="App">
      <body>
        <h1>Notifications 3 </h1>
        <p>Mark all as read</p>
        <div class="notifications">
          <div class="notification">
            <img src={markImg} alt="profileImg" />
            <p>
              <span className="name">Mark Webber</span> reacted to your recent
              post <span>My first tournament today!</span>
            </p>
            <p>1m ago</p>
          </div>
          <div class="notification">
            <img src={angelaImg} alt="profileImg" />
            <p>
              <span className="name">Angela Gray</span> followed you
            </p>
            <p>5m ago</p>
          </div>
          <div class="notification">
            <img src={jacobImg} alt="profileImg" />
            <p>
              <span className="name">Jacob Thompson</span> has joined your group
              <span>Chess Club</span>
            </p>
            <p>1 day ago</p>
          </div>
          <div class="notification">
            <img src={rizkyImg} alt="profileImg" />
            <p>
              <span className="name">Rizky Hasanuddin</span>sent you a private
              message
            </p>
            <p>5 days ago</p>
            <div className="message">
              <p>
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
          <div class="notification">
            <img src={kimImg} alt="profileImg" />
            <p>
              <span className="name">Kimberly Smith</span>commented on your
              picture
            </p>
            <p>1 week ago</p>
            <img src={chessPicture} alt="chess" />
          </div>
          <div class="notification">
            <img src={nathanImg} alt="profileImg" />
            <p>
              <span className="name">Nathan Peterson</span> reacted to your
              recent post{" "}
              <span>5 end-game strategies to increase your win rate</span>
            </p>
            <p>2 weeks ago</p>
          </div>
          <div class="notification">
            <img src={annaImg} alt="profileImg" />
            <p>
              <span className="name">Anna Kim</span> left the group{" "}
              <span>Chess Club</span>
            </p>
            <p>2 weeks ago</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
