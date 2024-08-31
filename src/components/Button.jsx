const Button = ({ text, type, onClick, disabled }) => {
  return (
    <button
      type={type}
      className={`w-full h-12 rounded-lg font-semibold bg-darkSlateGrey hover:bg-gradient-to-r hover:from-pink hover:to-orange text-white text-sm ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
