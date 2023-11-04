import List from "./List";
import "./Sidebar.css";
import "./ShortCut";
import ShortCut from "./ShortCut";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List />
      <ShortCut />
    </div>
  );
};

export default Sidebar;
