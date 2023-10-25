import "./ShortCut.css";
import ListItem from "./ListItem";
import React, { useState } from "react";

const ShortCut = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className="shortCut_title">你的捷徑</div>
      <ListItem
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBnPWBBUG_FQ3uzw5La5W-LJD6l7yr7k6VRVM5u3BhelgoDTf7Ki8QIciRnqOEY7Gbt4&usqp=CAU"
        content="我是台灣人"
      />
      <ListItem
        imgSrc="https://thumb.silhouette-ac.com/t/04/04a29e068842a1cac137bf1bcf7e6da7_t.jpeg"
        content="滑雪討論區"
      />
      <ListItem
        imgSrc="https://cdn.icon-icons.com/icons2/433/PNG/512/badminton_42657.png"
        content="羽球交流版"
      />
      {showMore && (
        <div>
          <ListItem
            imgSrc="https://media.istockphoto.com/id/1168022130/zh/%E5%90%91%E9%87%8F/%E9%A3%9B%E6%A9%9F%E5%9C%96%E7%A4%BA%E5%90%91%E9%87%8F.jpg?s=170667a&w=0&k=20&c=ZzTFg4rD4MufYwBSA_yBDOiASjvSGeCzSaNffTj_bxA="
            content="機票研究室"
          />
          <ListItem
            imgSrc="https://cdn-icons-png.flaticon.com/512/4488/4488318.png"
            content="二手樂器買賣交流"
          />
          <ListItem
            imgSrc="https://cdn3.iconfinder.com/data/icons/illustricon-tech/512/browser.development-512.png"
            content="Frontend 台灣"
          />
          <ListItem
            imgSrc="https://play-lh.googleusercontent.com/COGhjzBBD0F3ky0iplKrN1NsKAGBrEapdAJX391uHHB2ZiT5bHi4n_WhNLuvCgkYq6g"
            content="跑跑交流區"
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
    </div>
  );
};

export default ShortCut;
