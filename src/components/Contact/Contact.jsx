import "./Contact.css";
import { TextField } from "@mui/material";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-content">
				<h1>Send me a message!</h1>
				<p>Got a question or proposal, or just want to say hello? Go ahead.</p>
			</div>

			<form className="contact-form">
				<div className="form-group">
					<TextField
						id="name"
						label="Your Name"
						variant="standard"
						placeholder="John Doe"
						required
						InputLabelProps={{
							style: { color: "#e11d48" },
						}}
					/>
				</div>
				<div className="form-group">
					<TextField
						id="email"
						label="Your Email"
						variant="standard"
						placeholder="johndoe@gmail.com"
						required
						InputLabelProps={{
							style: { color: "#e11d48" },
						}}
					/>
				</div>
				<div className="form-group form-group__full-width">
					<label htmlFor="message">Your Message</label>
					<textarea
						rows="4"
						name="message"
						id="message"
						required
						placeholder="Hi, I think we need a developer for our products at Company X. How soon can you hop on to discuss this?

"
					/>
				</div>
				<div className="form-group form-group__center">
					<button>
						send
						<KeyboardDoubleArrowRight />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
