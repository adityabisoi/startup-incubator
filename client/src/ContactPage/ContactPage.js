import React from "react";
import Loader from "../Components/Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import "./Contact.css";

function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [contactMessage, setContactMessage] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!firstName) {
      setMessage("First Name shouldn't be empty");
    } else if (!lastName) {
      setMessage("Last Name shouldn't be empty");
    } else if (!email) {
      setMessage("Email shouldn't be empty");
    } else {
      setMessage("Contacted Successfully");
    }

    setLoading(false);
  }
  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit}>
        <h1 className="login_heading">Contact Us</h1>
        <div className="input_element">
          <PersonIcon />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            autoComplete="on"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            autoComplete="on"
            required
          />
        </div>

        <div className="input_element">
          <PhoneIcon />
          <input
            type="number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="Contact No"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
          <MailIcon />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="on"
            required
          />
        </div>

        <div className="Message">
          <MessageIcon />
          <input
            type="text"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            placeholder="Message"
            autoComplete="on"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="message_container">
        {isLoading && <Loader />}

        {message && (
          <div className="message">
            {message}
            <CloseIcon className="close" onClick={() => setMessage("")} />
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
