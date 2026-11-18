// Utils

// Next

// Components

const Button = ({ children, variant = "primary" }) => {
  // Base styles shared by all buttons
  const baseStyles =
    " font-medium text-base uppercase tracking-[0.2em] w-35 h-12";

  // Variant-specific styles
  const shine =
    "relative before:absolute before:-inset-[2px] before:border-2 before:border-text before:mask-(--corner-shine)";

  const variants = {
    primary: "bg-transparent border-text border-y-2",
    secondary: `bg-transparent border-text/20 border-2 ${shine}`,
    gradient: `bg-linear-(--gradient) border-transparent border-2 ${shine}`,
  };

  // Combine base styles with variant styles
  const buttonClasses = `${baseStyles} ${variants[variant]}`;

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
