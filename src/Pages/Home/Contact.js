import React, { useState } from 'react';
import { CommonAPi } from '../../API/CommonApi';
import { Endpoints } from '../../API/Endpoints';
import Swal from "sweetalert2";

export default function Contact() {
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        // e.preventdefault()
        let data = {
            email: email
        }
        try {
            let resp = await CommonAPi(Endpoints.ContactUs, data);
            if (resp && resp.status === true) {
                setEmail("");
                Swal.fire({
                    text: resp.message,
                    icon: "success"
                });
            }
        }
        catch (e) {
            if (e && e.response && e.response.data && e.response.data.message) {
                console.log(e.response.data.message)
            }
        }
    };
    return (
        <div className="single-sidebar col-lg-12 col-md-6 col-12">

            <div className="sidebar-subscribe">
                <h4>Contact us for our upcoming awards </h4>

                <div className="subscribe-form">
                    <div id="mc_embed_signup_scroll">
                        <label className="d-none">Subscribe to our mailing list</label>
                        <input
                            type="email"
                            name="email"

                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                            placeholder="Your email address"
                            required

                        />

                        <button className="button" onClick={handleSubmit}>submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
