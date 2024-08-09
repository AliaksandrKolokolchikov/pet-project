type Props = {
  onClick: () => void;
  cssClass: string;
};

export const LikeProduct = ({ onClick, cssClass }: Props) => {
  return (
    <a className={cssClass}>
      <svg
        width="40.000000"
        height="40.000000"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="group-hover:fill-[#00B307]"
        onClick={onClick}
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <circle
          id="Container"
          cx="20.000000"
          cy="20.000000"
          r="20.000000"
          fill="#FFFFFF"
          fillOpacity="1.000000"
        />
        <circle
          id="Container"
          cx="20.000000"
          cy="20.000000"
          r="19.500000"
          stroke="#F2F2F2"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          className="hover:stroke-[#00B307]"
        />
        <rect
          id="Heart"
          width="20.000000"
          height="20.000000"
          transform="translate(10.000000 10.000000)"
          fill="#FFFFFF"
          fillOpacity="0"
          className="group-hover:fill-[#00B307]"
        />
        <path
          id="Vector"
          d="M19.99 14.65C25 8.33 36.66 18.33 19.99 27.54C3.33 18.33 14.99 8.33 19.99 14.65Z"
          stroke="#1A1A1A"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          className="stroke-white"
        />
      </svg>
    </a>
  );
};
