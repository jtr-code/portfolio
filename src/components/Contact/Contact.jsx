import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Send me a message!</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-name">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name
"
            />
          </div>
          <div className="form-email">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address

"
            />
            <div className="form-message">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?

"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
