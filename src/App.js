import Navbar from "./Navbar/Navbar";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import WebPage from "./WebPage/WebPage";
import ContactBar from "./ContactBar/ContactBar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="page">
        <Sidebar />
        <WebPage />
        <ContactBar />
      </div>
    </div>
  );
}

export default App;
