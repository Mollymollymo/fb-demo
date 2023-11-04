import "./MyPost.css";

const MyPost = () => {
  return (
    <div className="my-post">
      <div className="my">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMz7RPw1Ln-AKDFP-hrexFZQLr8x7IJnHZEiZMeW7JylGE7PJSXNZ_1DQ6gFB3bzLt3ZY&usqp=CAU"
          width="25"
        ></img>
        <input
          className="my-input"
          type="text"
          placeholder="Molly，在想些什麼？"
        />
      </div>
      <div className="post-line"></div>
      <div className="post-button">
        <div className="live">直播視訊</div>
        <div className="pic">相片/影片</div>
        <div className="feel">感受/活動</div>
      </div>
    </div>
  );
};

export default MyPost;
