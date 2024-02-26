import React from "react";
import EmailInput from "./email-input";
import SectionHeading from "@/components/section-heading";

const SignupSection = () => {
  return (
    <div className="flex items-center justify-between">
      <SectionHeading title="Sign up and get exclusive special deals" />
      <EmailInput />
    </div>
  );
};

export default SignupSection;
