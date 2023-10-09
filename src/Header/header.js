import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="title">
          <div className="logo">
            <img
              src="https://www.facebook.com/images/fb_icon_325x325.png"
              width="40"
            ></img>
          </div>
          <input class="search" type="text" placeholder="搜尋Facebook" />
        </div>
      </div>
    </div>
  );
};

export default Header;
