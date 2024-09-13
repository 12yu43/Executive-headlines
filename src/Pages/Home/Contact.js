import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      service_id: "service_2f9u39e",
      template_id: "template_ck3l8ob",
      user_id: "VMb3SEnvRjmbHhT_J",
      template_params: {
        email: email,
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response)


      if (response.ok) {
        setEmail("");
        Swal.fire({
          text: response.message || "Email sent successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          text:  "Failed to send email.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        text: error.message || "An unexpected error occurred",
        icon: "error",
      });
    }
  };

  return (
    <div className="single-sidebar col-lg-12 col-md-6 col-12">
      <div className="sidebar-subscribe">
        <h4>Contact us for our upcoming awards</h4>
        <div className="subscribe-form">
          <form id="mc_embed_signup_scroll" onSubmit={handleSubmit}>
            <label className="d-none">Subscribe to our mailing list</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your email address"
              required
            />
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
