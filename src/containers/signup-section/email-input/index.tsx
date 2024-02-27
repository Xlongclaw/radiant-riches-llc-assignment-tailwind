import React from "react";

const EmailInput = () => {
  return (
    <form className="flex flex-col main-c-md:flex-row main-c-md:h-14 w-full main-c-md:w-1/2 justify-end ">
      <input
        className="bg-WHITE border h-16 main-c-md:h-auto border-GREY2/10 rounded-l-0 w-full main-c-md:rounded-l-xl px-5 mb-3 main-c-md:mb-0"
        type="email"
        placeholder="Enter Your Email"
      />
      <button className="bg-BLUE text-WHITE px-8 w-1/2 main-c-md:w-auto text-nowrap  h-12 main-c-md:h-auto main-c-md:rounded-r-xl">
        Sign Up
      </button>
    </form>
  );
};

export default EmailInput;
