"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  render() {
    return (
      <div className="linkdivbox">
        {/*TWITTER */}
        <div className="linkdiv">
          <a
            className="link"
            href="https://twitter.com/olusegun192?t=tyAOo-m72nwHKqahW8D1Hg"
          >
            TWITTER LINK
          </a>
        </div>
        {/*TWITTER */}
        <div className="linkdiv">
          <a
            className="link"
            href="https://twitter.com/olusegun192?t=tyAOo-m72nwHKqahW8D1Hg"
          >
            TWITTER LINK
          </a>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
