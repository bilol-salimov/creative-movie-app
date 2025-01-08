import React from "react";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <div className="container">
          <nav className="header-nav">
            <h1>
              <a className="logo" href="#">
                Creative Movie App
              </a>
            </h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Log out</a>
              </li>
            </ul>
          </nav>

          <div className="main-head">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/018/971/605/small_2x/3d-video-play-button-isolated-on-transparent-background-file-format-png.png"
              alt=""
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
