import "./ListItem.css";

const ListItem = ({ imgSrc, content }) => {
  <div className="listItem">
    <img className="listItem_img" src={imgSrc} alt="" />
    <div className="listItem_content">{content}</div>
  </div>;
};

export default ListItem;
