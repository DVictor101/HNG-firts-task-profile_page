"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  render() {
    return (
      <div className="linkdivbox">
        {/*TWITTER */}

        <a
          id="twitter"
          href="https://twitter.com/olusegun192?t=tyAOo-m72nwHKqahW8D1Hg"
        >
          TWITTER LINK
        </a>

        {/*SLACK USERNAME */}
        {/* <div id="slack">
            DVictor
        </div> */}
        {/*ZURI TEAM*/}

        <a id="btn_zuri" href="https://training.zuri.team">
          Zuri Team
        </a>

        {/*ZURI BOOK*/}

        <a
          id="books"
          href="https://books.zuri.team"
          title="zuri b00ks-best book dealer online"
        >
          Zuri Books
        </a>

        {/*PYTHON BOOKS*/}

        <a
          id="book_python"
          href="https://books.zuri.team/python-for-beginners?ref_id=adedotunsegun"
          title="zuri b00ks-best book boo on python you can find online"
        >
          Python Books
        </a>

        {/*Background Check for Coders*/}

        <a id="pitch" href="https://background.zuri.team">
          Background Check for Coders
        </a>

        {/*Design Book
         */}

        <a id="book__design" href="https://books.zuri.team/design-rules">
          Design Book
        </a>
      </div>
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
