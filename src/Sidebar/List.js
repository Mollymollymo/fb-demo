import "./List.css";
import ShortCut from "./ShortCut";
import React, { useState } from "react";

const List = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="list">
      <div className="icon">
        <img
          className="icon_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMz7RPw1Ln-AKDFP-hrexFZQLr8x7IJnHZEiZMeW7JylGE7PJSXNZ_1DQ6gFB3bzLt3ZY&usqp=CAU"
          width="25"
        ></img>
        <div className="icon_content">Molly</div>
      </div>
      <div className="friend">
        <img
          className="friend_img"
          src="https://cdn.icon-icons.com/icons2/2760/PNG/512/friends_users_icon_176357.png"
          width="25"
        ></img>
        <div className="friend_content">朋友</div>
      </div>
      <div className="review">
        <img
          className="review_img"
          src="https://iphoto.mac89.com/icon/icon/256/20201106/97445/4223197.png"
          width="25"
        ></img>
        <div className="review_content">動態回顧</div>
      </div>
      <div className="label">
        <img
          className="label_img"
          src="https://pic.616pic.com/ys_bnew_img/00/46/08/wVAJi7Hy5r.jpg"
          width="20"
        ></img>
        <div className="label_content">我的珍藏</div>
      </div>
      <div className="society">
        <img
          className="society_img"
          src="https://img.ixintu.com/download/jpg/20200727/c4e619668aa3762fa240316629664216_512_512.jpg!con"
          width="20"
        ></img>
        <div className="society_content">社團</div>
      </div>
      <div className="film">
        <img
          className="film_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZLqS-hV0FfOMNqFcStlVzPv1K_GxJpDSyA&usqp=CAU"
          width="25"
        ></img>
        <div className="film_content">影片</div>
      </div>
      {showMore && (
        <div>
          <div className="sms">
            <img
              className="sms_img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
              width="25"
            ></img>
            <div className="sms_content">Messenger</div>
          </div>
          <div className="game">
            <img
              className="game_img"
              src="https://cdn.icon-icons.com/icons2/2191/PNG/512/game_game_console_play_device_icon_133759.png"
              width="25"
            ></img>
            <div className="game_content">玩遊戲</div>
          </div>
          <div className="active">
            <img
              className="active_img"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/289/157/small_2x/3__2849_29.jpg"
              width="25"
            ></img>
            <div className="active_content">活動</div>
          </div>
          <div className="fanPage">
            <img
              className="fanPage_img"
              src="https://img95.699pic.com/element/40028/4844.png_300.png"
              width="25"
            ></img>
            <div className="fanPage_content">粉絲專頁</div>
          </div>
          <div className="donate">
            <img
              className="donate_img"
              src="https://images.pcone.com.tw/uploads/product_image/4402064/0400a0382d7349e959538e7260451b50/b630856e28bd52530dd794f8adf972bb.jpg"
              width="25"
            ></img>
            <div className="donate_content">募款活動</div>
          </div>
          <div className="advertise">
            <img
              className="advertise_img"
              src="https://img.ixintu.com/download/jpg/20201217/7ae2cae9441c010f350528eba2490711_512_512.jpg!con"
              width="25"
            ></img>
            <div className="advertise_content">廣告中心</div>
          </div>
          <div className="meta">
            <img
              className="meta_img"
              src="https://companieslogo.com/img/orig/META-4767da84.png?t=1654568366"
              width="25"
            ></img>
            <div className="meta_content">Meta Quest</div>
          </div>
        </div>
      )}
      <div className="showMore">
        <img
          className="showMore_img"
          src="https://img.88icon.com/download/jpg/20200716/c96ab94f31bc0e1ebb1eaa99e89a7f7d_512_512.jpg!bg"
          width="25"
        ></img>
        <div className="showMore_content" onClick={handleShowMore}>
          {showMore ? "顯示更少" : "顯示更多"}
        </div>
      </div>

      <div className="line"></div>

      <ShortCut />
    </div>
  );
};

export default List;
