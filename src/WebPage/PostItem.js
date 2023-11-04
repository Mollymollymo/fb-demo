import "./PostItem.css";

const PostItem = ({
  posterImg,
  posterName,
  time,
  postImg,
  likesNum,
  commentNum,
  shareNum,
  title,
}) => {
  return (
    <div className="post">
      <div className="poster_content">
        <img className="poster_img" src={posterImg} width="40"></img>
        <div className="poster">
          <div className="poster_name">{posterName}</div>
          <div className="time">{time}</div>
        </div>
      </div>
      <div className="post_content">
        <div className="post_title">{title}</div>
        <img className="post_img" src={postImg} width="100%"></img>
      </div>
      <div className="bottom">
        <div className="number">
          <div className="likes_number">{likesNum}</div>
          <div className="comments">
            <div className="comment_number">{commentNum}</div>
            <div className="share_number">{shareNum}</div>
          </div>
        </div>
        <div className="post_line"></div>
        <div className="button">
          <div className="like">讚</div>
          <div className="comment">留言</div>
          <div className="share">分享</div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
