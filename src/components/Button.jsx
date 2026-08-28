// A single component for every button/link-that-looks-like-a-button in the
// site, so hover/focus states and sizing stay consistent everywhere.
export default function Button({
  children,
  href,
  onClick,
  variant = "primary", // "primary" | "secondary" | "ghost"
  type = "button",
  icon: Icon,
  disabled = false,
  ...rest
}) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
        {Icon && <Icon size={18} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
      {Icon && <Icon size={18} aria-hidden="true" />}
    </button>
  );
}
