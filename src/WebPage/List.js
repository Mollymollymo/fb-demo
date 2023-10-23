import "./List.css";

const List = () => {
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
      <div className="story">
        <img
          className="story_img"
          src="https://iphoto.mac89.com/icon/icon/256/20201106/97445/4223197.png"
          width="25"
        ></img>
        <div className="story_content">動態回顧</div>
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

export default List;
