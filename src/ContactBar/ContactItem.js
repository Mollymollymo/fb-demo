import "./ContactItem.css";

const ContactItem = ({ imgSrc, contactName }) => {
  return (
    <div className="contact-item">
      <img className="contact-img" src={imgSrc}></img>
      <div className="contact-name">{contactName}</div>
    </div>
  );
};

export default ContactItem;
