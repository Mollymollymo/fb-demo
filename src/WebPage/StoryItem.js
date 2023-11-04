import "./StoryItem.css";

const StoryItem = ({ imgUrl, title }) => {
  return (
    <div className="storyItem">
      <img className="storyItem_img" src={imgUrl} />
      <div className="storyItem_title">{title}</div>
    </div>
  );
};

export default StoryItem;
