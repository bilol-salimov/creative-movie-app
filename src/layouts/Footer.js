import React from "react";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="main-footer">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/018/971/605/small_2x/3d-video-play-button-isolated-on-transparent-background-file-format-png.png"
            alt=""
          />
        </div>
        <div className="container">
          <p>{new Date().getFullYear()} All rights reserved &copy;</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
