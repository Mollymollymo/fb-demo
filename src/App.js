import Navbar from "./Navbar/Navbar";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import WebPage from "./WebPage/WebPage";
import ContactBar from "./ContactBar/ContactBar";

function App() {
  return (
    <div>
      <Navbar className="navbar-component" />
      <div className="page">
        <Sidebar className="sidebar-component" />
        <WebPage className="webpage-component" />
        <ContactBar className="contactbar-component" />
      </div>
    </div>
  );
}

export default App;
