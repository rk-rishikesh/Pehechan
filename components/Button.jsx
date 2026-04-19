import Link from "next/link";
import clsx from "clsx";

const Button = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    invert
      ? "bg-white text-brand-espresso hover:bg-brand-blush-light"
      : "bg-brand-rose text-white hover:bg-brand-rose-hover",
    className
  );

  let inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
