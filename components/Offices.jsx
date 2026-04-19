import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-brand-blush-light/80" : "text-brand-espresso/70"
      )}
    >
      <strong className={invert ? "text-white" : "text-brand-espresso"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="U.S.A" invert={invert}>
          on bay mark
          <br />
          Newtown city of Las Vegas
        </Office>
      </li>
      <li>
        <Office name="London" invert={invert}>
          13 long Street
          <br />
          Downtown, Allyway
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
