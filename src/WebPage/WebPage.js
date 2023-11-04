import "./WebPage.css";
import Story from "./Story";
import MyPost from "./MyPost";
import Post from "./Post";

const WebPage = () => {
  return (
    <div className="web-page">
      <Story />
      <MyPost />
      <Post />
    </div>
  );
};

export default WebPage;
