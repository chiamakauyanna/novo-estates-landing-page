const Button = ({ text, className }) => {
  return (
    <div
      className={`${className} bg-accent py-2 px-2 lg:px-4 text-xs md:text-sm lg:text-base rounded font-bold font-heading transition-all duration-300 hover:bg-accent/80`}
    >
      {text}
    </div>
  );
};

export default Button;
