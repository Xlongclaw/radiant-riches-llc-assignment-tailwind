import React from "react";
import EmailInput from "./email-input";
import SectionHeading from "@/components/section-heading";

const SignupSection = () => {
  return (
    <div className="flex flex-col main-c-xl:flex-row items-start main-c-xl:items-center main-c-lg:justify-between mb-12 main-c-lg:mb-0">
      <SectionHeading title="Sign up and get exclusive special deals" />
      <EmailInput />
    </div>
  );
};

export default SignupSection;
