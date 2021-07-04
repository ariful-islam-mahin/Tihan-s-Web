import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="max-width mx-auto mt-5">
            <h1 className="text-center contact-header-text h1">Contact with Shomrat Tihan</h1>
            <div className="form-box shadow-box mt-3 mx-4">
                <form className="" action="">
                    <div className="pl-1 pr-3 py-4 mx-3 row">
                        <img className="col-sm-4 contact-img" src="https://photos.smugmug.com/Se7ce05c04cf1d9279f50598/n-b8g7Td/i-q7f7xSw/0/3ca30f14/Th/i-q7f7xSw-Th.png" alt="" height="100%"/>
                        <div className="col-sm-8">
                            <label >To: Shomrat Tihan</label><br />
                            <label className="mb-1" htmlFor="email">Your Email Address</label><br />
                            <input className="form-control form-input mb-1" type="email" id="email" name="email"/>
                            <label className="mb-1 mt-2" htmlFor="subject">Subject</label>
                            <input className="form-control form-input mb-1" type="text" id="subject" name="subject"/>
                            <label className="mb-1 mt-2" htmlFor="message">Message</label>
                            <textarea className="form-control form-input" name="message" id="message" rows="5"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn submit-btn">Send</button>
                </form>
            </div>
        </div>
            );
};

export default Contact;