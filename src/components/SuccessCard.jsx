import Button from "./Button";
import successIcon from "../assets/images/icon-success.svg";

const SuccessCard = ({ email, onDismiss }) => {
  return (
    <div className="bg-white max-sm:w-full max-sm:min-h-screen w-[440px] sm:rounded-[28px] flex flex-col pt-10 px-[56px] max-sm:px-8 pb-12 max-sm:justify-between max-sm:pt-[200px]">
      <div>
        <div>
          <img
            src={successIcon}
            alt="Success icon"
            className="w-[50px] max-sm:w-[56px]"
          />
        </div>

        <h1 className="font-bold text-5xl text-darkSlateGrey mt-8">
          Thanks for subscribing!
        </h1>

        <p className="font-normal text-sm text-charcoalGrey mt-5 mb-8">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>

      <Button type="button" text="Dismiss message" onClick={onDismiss} />
    </div>
  );
};

export default SuccessCard;
