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
          <input className="search" type="text" placeholder="搜尋Facebook" />
        </div>
        <div className="show-page">
          <div className="home">
            <img
              src="https://img.ixintu.com/download/jpg/20200727/e4717414143b41018c126611dfe4927f_512_511.jpg!con"
              width="25"
            ></img>
          </div>
          <div className="video">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZLqS-hV0FfOMNqFcStlVzPv1K_GxJpDSyA&usqp=CAU"
              width="35"
            ></img>
          </div>
          <div className="market">
            <img
              src="https://cdn.icon-icons.com/icons2/2469/PNG/512/marketplace_icon_149431.png"
              width="25"
            ></img>
          </div>
          <div className="club">
            <img
              src="data:image/png;base64,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"
              width="25"
            ></img>
          </div>
        </div>
        <div className="account">
          <div className="menu">
            <img
              src="https://img.88icon.com/download/jpg/202001/05b39eff9c880632ec2989bb99fefcda.jpg!bg"
              width="25"
            ></img>
          </div>
          <div className="messenger">
            <img
              src="https://static-00.iconduck.com/assets.00/messenger-icon-512x512-4o0v5zmv.png"
              width="25"
            ></img>
          </div>
          <div className="notice">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFloQvHmF1rBZ5oHrc-qr0HMpCy3QYrcXfA&usqp=CAU"
              width="25"
            ></img>
          </div>
          <div className="account">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMz7RPw1Ln-AKDFP-hrexFZQLr8x7IJnHZEiZMeW7JylGE7PJSXNZ_1DQ6gFB3bzLt3ZY&usqp=CAU"
              width="25"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
