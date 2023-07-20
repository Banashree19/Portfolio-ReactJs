import React,{useState} from "react";
import emailjs from "emailjs-com";

const Contacts = () => {

    const serviceID ="service_ID";
    const templateID ="template_ID";
    const userID ="_6XIxrLdg6bCI1t0g";




    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };








  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your requirements also I am open
          for openings and I'll contact you as soon as possible.
        </p>
      </div>
      <div className="container">
          <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <div className="line"></div>
            </div>
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
              <div className="line"></div>
            </div>
            <div className="text-center">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
              <div className="line"></div>
            </div>
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
              <div className="line"></div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <textarea
                type="text"
                className="form-control"
                placeholder="Please describe shortly...."
                name="description"
              ></textarea>
              <div className="line"></div>
            </div>

            <button type="submit" className="btn-main-offer contact-btn" >
              contact me
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
