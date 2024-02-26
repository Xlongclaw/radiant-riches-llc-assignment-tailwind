import React from "react";

const EmailInput = () => {
  return (
    <div className="flex h-14 w-1/2 justify-end">
      <input
        className="bg-WHITE border border-GREY2/10 rounded-l-xl px-5"
        type="email"
        placeholder="Enter Your Email"
      />
      <button className="bg-BLUE text-WHITE px-8 rounded-r-xl">Sign Up</button>
    </div>
  );
};

export default EmailInput;
