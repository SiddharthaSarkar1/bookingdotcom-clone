import React from "react";
import FooterWhite from "./FooterWhite";

const input1 = {
  width: "25%",
  marginRight: "5px",
  height: "44px",
  border: "none",
  borderRadius: "4px",
  fontSize: "20px",
  fontWeight: "100",
  paddingLeft: "8px",
};
const label = { color: "white", fontSize: "17px", padding: "0", margin: "0" };
const button = {
  backgroundColor: "#0071C2",
  border: "none",
  borderRadius: "4px",
  height: "44px",
  padding: "14px",
  color: "white",
  fontSize: "14px"
};
const p1 = {
  color: "#F6F7F9",
  fontSize: "30px",
  fontWeight: "300",
  padding: "0",
  margin: "0",
};
const p2 = {
  color: "#AFB1B5",
  fontSize: "16px",
  padding: "0",
  margin: "5px",
  marginBottom: "14px",
};

const FooterBlue = () => {
  return (
    <>
      <div className="mx-auto bg-[#00224F] text-center mt-14 p-6 lg:px-8 overflow-y-auto">
        <p style={p1}>Save time, save money!</p>
        <p style={p2}>Sign up and we'll send the best deals to you</p>
        <div className="p-2 flex justify-center items-center">
          <input style={input1} type="text" placeholder=" Your email" />
          <button style={button} className="mt-1">Subscribe</button>
        </div>
        <input type="checkbox" id="c1" />
        <label style={label}>
          Send me a link to get the FREE Booking.com app!
        </label>
      </div>
      <div className="mx-auto bg-[#003580] p-5 border-none overflow-hidden">
        <button
          className="p-1 border bg-transparent border-white text-white rounded cursor-pointer text-center m-auto ml-[50%]"
        >
          List your property
        </button>
        <hr
          style={{
            border: "none",
            background: "white",
            height: "1px",
            marginTop: "15px",
          }}
        />
        <div
          style={{
            width: "70%",
            margin: "auto",
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/"
            className="text-white text-xs font-semibold hover:underline"
          >
            Mobile version
          </a>
          <a
            href="/"
            className="text-white text-xs font-semibold hover:underline"
          >
            Your account
          </a>
          <a
            href="/"
            className="text-white text-xs font-semibold hover:underline"
          >
            Make changes online to your booking
          </a>
          <a
            href="/"
            className="text-white text-xs font-semibold hover:underline"
          >
            Contact Customer Service
          </a>
          <a
            href="/"
            className="text-white text-xs font-semibold hover:underline"
          >
            Become an affiliate
          </a>
          <a
            href="/"
            className="text-white text-xs font-semibold hover:underline"
          >
            Booking.com for Business
          </a>
        </div>
      </div>
      <FooterWhite />
    </>
  );
};

export default FooterBlue;
