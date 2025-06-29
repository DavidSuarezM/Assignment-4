import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        contact: "",
        email: "",
        message: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        navigate("/"); // redirects to Home (path "/")
    };

    return (
        <div className="container">
            <h2>📬 Contact Me</h2>

            <div className="info-panel">
                <p><strong>David Andres Suarez Molina</strong></p>
                <p>Email: dsuarezm@my.centennialcollege.ca</p>
                <p>Phone: +1 (416) 605-0415</p>
                <p>Location: Toronto, Ontario, Canada</p>
            </div>

            <h2>📝 Suggestions or comments</h2>
            <form class="form-container" onSubmit={handleSubmit}>
                <div class="form-row">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="form-row">
                    <label htmlFor="contact">Contact Number</label>
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="form-row">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <input type="submit" value="Send" />
            </form>
        </div>
    );
}
