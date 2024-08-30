import { useMemo, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import ListItem from "./ListItem";
import signupIllustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import signupIllustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import { isValidEmail } from "../utils";

const SignupForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [formTouched, setFormTouched] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setFormTouched(true);
    if (errorMessage || email.length === 0 || !isValidEmail(email)) {
      return;
    }
    onSubmit(email);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const errorMessage = useMemo(() => {
    if (!formTouched) {
      return "";
    }
    if (isValidEmail(email)) {
      return "";
    }
    return "Valid email required";
  }, [email, formTouched]);

  return (
    <div className="bg-white max-sm:w-full max-sm:min-h-screen w-[830px] sm:rounded-[28px] sm:p-5 flex max-sm:flex-col-reverse items-center sm:space-x-5">
      <div className="p-6 flex-1">
        <h1 className="font-bold max-sm:text-4xl text-5xl text-darkSlateGrey">
          Stay updated!
        </h1>

        <p className="font-normal text-sm text-charcoalGrey my-5">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul>
          <ListItem text="Product discovery and building what matters" />
          <ListItem text="Measuring to ensure updates are a success" />
          <ListItem text="And much more!" />
        </ul>

        <form onSubmit={submitForm}>
          <Input
            name="email"
            type="email"
            label="Email address"
            placeholder="email@company.com"
            value={email}
            onChange={handleEmailChange}
            error={errorMessage}
            onBlur={() => {
              setFormTouched(true);
            }}
          />

          <Button
            type="submit"
            text="Subscribe to monthly newsletter"
            disabled={errorMessage}
          />
        </form>
      </div>
      <div className="sm:flex-1 max-sm:w-full max-sm:mb-6">
        <img
          src={signupIllustrationDesktop}
          alt="Sign up form illustration"
          className="max-sm:hidden"
        />
        <img
          src={signupIllustrationMobile}
          alt="Sign up form illustration"
          className="sm:hidden w-full object-cover max-sm:max-h-[350px]"
        />
      </div>
    </div>
  );
};

export default SignupForm;
