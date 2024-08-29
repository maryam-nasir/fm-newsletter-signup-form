import { useMemo, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import ListItem from "./ListItem";
import signupIllustration from "../assets/images/illustration-sign-up-desktop.svg";
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
    <div className="bg-white w-[830px] rounded-[28px] p-5 flex items-center space-x-5">
      <div className="p-6 flex-1">
        <h1 className="font-bold text-5xl text-darkSlateGrey">Stay updated!</h1>

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
      <div className="flex-1">
        <img src={signupIllustration} alt="Sign up form illustration" />
      </div>
    </div>
  );
};

export default SignupForm;
