import React from "react";

const OurServices = () => {
  return (
    <div>
      {" "}
      <i
        class="fa-solid fa-arrow-left"
        style={{
          display: "inline",
          fontSize: 24,
          marginRight: 15,
          color: "#00308b",
        }}
      ></i>
      <p className="hmoText" style={{ marginLeft: 30, fontSize: 24 }}>
        Speak with a Doctor
      </p>
      <div className="contact-information" style={{ fontWeight: 600 }}>
        <p>How would you like to speak with a doctor?</p>
      </div>
      <div className="call-a-doctor">
        <div>
          <p style={{ fontSize: 22, fontWeight: 700, paddingTop: 20 }}>
            Call a Doctor
          </p>
        </div>
        <div>
          <p>
            Connect with a doctor instantly by dialing our toll free number.
          </p>
          <img src={callIcon} alt="" />
        </div>
      </div>
      <div className="chat-with-a-doctor">
        <div>
          <p style={{ fontSize: 22, fontWeight: 700, paddingTop: 20 }}>
            Chat with a doctor
          </p>
        </div>
        <div>
          <p>
            Ask unlimited questions to licensed doctors and receive personalized
            help.
          </p>
          <img src={chatIcon} alt="" />
        </div>
      </div>
      <div className="book-a-visit-Links callOrChat">
        <div className="buttonGroup Home">
          <img src={home} alt="" />
        </div>
        <div className="buttonGroup hospitals">
          <img src={hospital} alt="" />
        </div>
        <div className="buttonGroup health-tips">
          <img src={healthtips} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
