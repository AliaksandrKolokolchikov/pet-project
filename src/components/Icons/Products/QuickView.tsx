type Props = {
  cssClass: string;
};

export const QuickView = ({ cssClass }: Props) => {
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
      >
        <desc>Created with Pixso.</desc>
        <defs>
          <clipPath id="clip170_8252">
            <rect
              id="Eye 1"
              width="20.000000"
              height="20.000000"
              transform="translate(10.000000 10.000000)"
              fill="white"
              fillOpacity="0"
            />
          </clipPath>
        </defs>
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
          strokeOpacity="2.000000"
          strokeWidth="1.50000"
          className="hover:stroke-[#00B307]"
        />
        <rect
          id="Eye 1"
          width="20.000000"
          height="20.000000"
          transform="translate(10.000000 10.000000)"
          fill="#FFFFFF"
          fillOpacity="0"
        />
        <g clipPath="url(#clip170_8252)">
          <path
            id="Vector"
            d="M11.25 20C11.25 20 13.75 26.45 20 26.45C26.25 26.45 28.75 20 28.75 20C28.75 20 26.25 13.54 20 13.54C13.75 13.54 11.25 20 11.25 20Z"
            stroke="#1A1A1A"
            strokeOpacity="1.000000"
            strokeWidth="1.500000"
            strokeLinejoin="round"
            className="stroke-white"
          />
          <path
            id="Vector"
            d="M22.2 22.2C22.79 21.62 23.12 20.82 23.12 20C23.12 19.17 22.79 18.37 22.2 17.79C21.62 17.2 20.82 16.87 20 16.87C19.17 16.87 18.37 17.2 17.79 17.79C17.2 18.37 16.87 19.17 16.87 20C16.87 20.82 17.2 21.62 17.79 22.2C18.37 22.79 19.17 23.12 20 23.12C20.82 23.12 21.62 22.79 22.2 22.2Z"
            stroke="#1A1A1A"
            strokeOpacity="1.000000"
            strokeWidth="1.500000"
            strokeLinejoin="round"
            className="stroke-white"
          />
        </g>
      </svg>
    </a>
  );
};
