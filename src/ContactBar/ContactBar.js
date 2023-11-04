import "./ContactBar.css";
import Profile from "./Profile";
import Contact from "./Contact";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <Profile />
      <Contact />
    </div>
  );
};

export default ContactBar;
