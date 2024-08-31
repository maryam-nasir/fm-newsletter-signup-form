import { useState, useRef } from "react";

import SignupForm from "./components/SignupForm";
import SuccessCard from "./components/SuccessCard";

const App = () => {
  const [showSuccessState, setShowSuccessState] = useState(false);
  const email = useRef();

  const handleDismiss = () => {
    setShowSuccessState(false);
    email.current = "";
  };

  const submitForm = (value) => {
    email.current = value;
    setShowSuccessState(true);
  };

  return (
    <>
      {showSuccessState ? (
        <SuccessCard email={email.current} onDismiss={handleDismiss} />
      ) : (
        <SignupForm onSubmit={submitForm} />
      )}
    </>
  );
};

export default App;
