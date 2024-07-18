function Cancelation({ isMini = false }) {
  return isMini ? (
    <svg
      width={66}
      height={66}
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.500275"
        width={65}
        height={65}
        rx="32.5"
        stroke="#B5EAEE"
      />
      <path
        d="M43.125 22.8753L22.875 43.1253"
        stroke="#B5EAEE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.125 43.1253L22.875 22.8753"
        stroke="#B5EAEE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg width="{86}" height="{86}" fill="none">
      <rect
        x="{0.5}"
        y="{0.5}"
        width="{85}"
        height="{85}"
        rx="{42.5}"
        stroke="#B5EAEE"
      />
      <path
        d="M53.125 32.875l-20.25 20.25M53.125 53.125l-20.25-20.25"
        stroke="#B5EAEE"
        strokewidth="{1.5}"
        strokelinecap="round"
        strokelinejoin="round"
      />
    </svg>
  );
}

export default Cancelation;
