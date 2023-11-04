import "./ListItem.css";

const ListItem = ({ imgSrc, content, onClick }) => {
  return (
    <div className="listItem" onClick={onClick}>
      <img className="listItem_img" src={imgSrc} />
      <div className="listItem_content">{content}</div>
    </div>
  );
};

export default ListItem;
