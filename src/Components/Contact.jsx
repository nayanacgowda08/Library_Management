import React from "react";
import "../assets/styles/contact.css"

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a72b002e-9c37-4b3b-a2f0-5ff42862622b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-us">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="name" name="name" required/>
        <input type="email" placeholder="email"  name="email" required/>
        <input type="number" placeholder="contact"  name="contact" required/>
        <textarea style={{
            maxWidth: "90%",
        }}
        name="message" required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}

export default Contact;