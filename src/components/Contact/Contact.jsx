import "./Contact.css";
import { TextField } from "@mui/material";
import { useForm } from "@formspree/react";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkddlan");
  const formRef = useRef();
  const handleFormSubmit = async (event) => {
    await handleSubmit(event);

    if (state.succeeded) {
      toast.success("Your Email has been sent!");
      window.scrollTo(0, 0);
      formRef.current.reset();
    }
  };

  return (
    <div className="contact">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="contact-content">
        <h1>Send me a message!</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      </div>

      <form className="contact-form" onSubmit={handleFormSubmit} ref={formRef}>
        <div className="form-group">
          <TextField
            sx={{
              "& .MuiInput-underline:before, &.Mui-focused .MuiInput-underline, &:hover .MuiInput-underline:before":
                {
                  borderBottomColor: "#e11d48!important"
                },
              "& .MuiInput-root::after": {
                borderBottom: "2px solid #e11d48!important"
              }
            }}
            id="name"
            label="Your Name"
            variant="standard"
            placeholder="John Doe"
            required
            InputLabelProps={{
              style: { color: "#e11d48" }
            }}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <TextField
            sx={{
              "& .MuiInput-underline:before, &.Mui-focused .MuiInput-underline, &:hover .MuiInput-underline:before":
                {
                  borderBottomColor: "#e11d48!important"
                },
              "& .MuiInput-root::after": {
                borderBottom: "2px solid #e11d48!important"
              }
            }}
            type="email"
            id="email"
            label="Your Email"
            variant="standard"
            placeholder="johndoe@gmail.com"
            required
            InputLabelProps={{
              style: { color: "#e11d48" }
            }}
            autoComplete="off"
          />
        </div>
        <div className="form-group form-group__full-width">
          <label htmlFor="message">Your Message</label>
          <textarea
            rows="3"
            name="message"
            id="message"
            required
            placeholder="Hi, I think we need a developer for our products at Company X. How soon can you hop on to discuss this?

"
          />
        </div>
        <div className="form-group form-group__center">
          <button>
            Send
            <KeyboardDoubleArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
