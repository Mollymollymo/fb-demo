import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-title">
        <div className="title-content">你的粉絲專頁和個人檔案</div>
        <div className="dot">...</div>
      </div>
      <div className="line"></div>
      <div className="hbd">
        <div className="hbd-title">壽星</div>
        <div className="hbd-content">
          <img
            src="https://png.pngtree.com/png-vector/20190501/ourlarge/pngtree-gift-icon-design-png-image_1012409.jpg"
            width="25"
          ></img>
          <div className="hbd-content">卓世明和其他3人今天生日</div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Profile;
