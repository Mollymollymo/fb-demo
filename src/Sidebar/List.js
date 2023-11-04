import "./List.css";

import React, { useState } from "react";
import ListItem from "./ListItem";

const List = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="list">
      <ListItem
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMz7RPw1Ln-AKDFP-hrexFZQLr8x7IJnHZEiZMeW7JylGE7PJSXNZ_1DQ6gFB3bzLt3ZY&usqp=CAU"
        content="Molly"
      />
      <ListItem
        imgSrc="https://cdn.icon-icons.com/icons2/2760/PNG/512/friends_users_icon_176357.png"
        content="朋友"
      />
      <ListItem
        imgSrc="https://iphoto.mac89.com/icon/icon/256/20201106/97445/4223197.png"
        content="動態回顧"
      />
      <ListItem
        imgSrc="https://pic.616pic.com/ys_bnew_img/00/46/08/wVAJi7Hy5r.jpg"
        content="我的珍藏"
      />
      <ListItem
        imgSrc="https://img.ixintu.com/download/jpg/20200727/c4e619668aa3762fa240316629664216_512_512.jpg!con"
        content="社團"
      />
      <ListItem
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZLqS-hV0FfOMNqFcStlVzPv1K_GxJpDSyA&usqp=CAU"
        content="影片"
      />

      {showMore && (
        <div>
          <ListItem
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
            content="Messenger"
          />
          <ListItem
            imgSrc="https://cdn.icon-icons.com/icons2/2191/PNG/512/game_game_console_play_device_icon_133759.png"
            content="玩遊戲"
          />
          <ListItem
            imgSrc="https://static.vecteezy.com/system/resources/thumbnails/000/289/157/small_2x/3__2849_29.jpg"
            content="活動"
          />
          <ListItem
            imgSrc="https://img95.699pic.com/element/40028/4844.png_300.png"
            content="粉絲專頁"
          />
          <ListItem
            imgSrc="https://images.pcone.com.tw/uploads/product_image/4402064/0400a0382d7349e959538e7260451b50/b630856e28bd52530dd794f8adf972bb.jpg"
            content="募款活動"
          />
          <ListItem
            imgSrc="https://img.ixintu.com/download/jpg/20201217/7ae2cae9441c010f350528eba2490711_512_512.jpg!con"
            content="廣告中心"
          />
          <ListItem
            imgSrc="https://companieslogo.com/img/orig/META-4767da84.png?t=1654568366"
            content="Meta Quest"
          />
        </div>
      )}
      <ListItem
        imgSrc={
          showMore
            ? "https://thumb.silhouette-ac.com/t/bb/bbee358230192723d97e3597f9224f07_t.jpeg"
            : "https://img.88icon.com/download/jpg/20200716/c96ab94f31bc0e1ebb1eaa99e89a7f7d_512_512.jpg!bg"
        }
        content={showMore ? "顯示更少" : "顯示更多"}
        onClick={handleShowMore}
      />

      <div className="line"></div>
    </div>
  );
};

export default List;
