import "./Contact.css";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-title">聯絡人</div>
        <div className="contact-content">
          <img
            src="https://cdn.icon-icons.com/icons2/3298/PNG/512/magnifying_glass_search_icon_208685.png"
            width="20"
          ></img>
          <div className="dot">...</div>
        </div>
      </div>

      <ContactItem
        src="https://assets.clibo.tw/images/commissions/LzMZg8-bwe7.jpeg?v=300e21ad164e93c4be1adf036bac10a8"
        contactName="Bobby Su"
      />
    </div>
  );
};

export default Contact;
