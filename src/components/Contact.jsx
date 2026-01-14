import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      console.log(response.data);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", margin: "5px 0", padding: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", margin: "5px 0", padding: "10px" }}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: "100%", margin: "5px 0", padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", marginTop: "10px" }}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status === "success" && <p style={{ color: "green" }}>Message sent successfully!</p>}
      {status === "error" && <p style={{ color: "red" }}>Failed to send message.</p>}
    </div>
  );
};

export default Contact;
