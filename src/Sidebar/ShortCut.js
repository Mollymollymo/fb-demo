import "./ShortCut.css";

const ShortCut = () => {
  return (
    <div>
      <div className="shortCut_title">你的捷徑</div>
      <div className="taiwan">
        <img
          className="taiwan_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBnPWBBUG_FQ3uzw5La5W-LJD6l7yr7k6VRVM5u3BhelgoDTf7Ki8QIciRnqOEY7Gbt4&usqp=CAU"
          width="25"
        ></img>
        <div className="taiwan_content">我是台灣人</div>
      </div>
      <div className="ski">
        <img
          className="ski_img"
          src="https://thumb.silhouette-ac.com/t/04/04a29e068842a1cac137bf1bcf7e6da7_t.jpeg"
          width="25"
        ></img>
        <div className="ski_content">滑雪討論區</div>
      </div>
      <div className="badminton">
        <img
          className="badminton_img"
          src="https://cdn.icon-icons.com/icons2/433/PNG/512/badminton_42657.png"
          width="25"
        ></img>
        <div className="badminton_content">羽球交流版</div>
      </div>
      <div className="showMore">
        <img
          className="showMore_img"
          src="https://img.88icon.com/download/jpg/20200716/c96ab94f31bc0e1ebb1eaa99e89a7f7d_512_512.jpg!bg"
          width="25"
        ></img>
        <div className="showMore_content">顯示更多</div>
      </div>
    </div>
  );
};

export default ShortCut;
