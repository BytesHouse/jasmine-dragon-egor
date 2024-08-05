function ChooseHeart({ ...props }) {
  return (
    <button onClick={props.onClick}>
      <svg
        width={36}
        height={37}
        fill="none"
        {...props}
        className={`hidden _491:block ${props.className}`}
      >
        <path
          d="M18 30.867S3.937 22.992 3.937 13.43A7.312 7.312 0 0118 10.617a7.313 7.313 0 0114.063 2.813C32.063 22.992 18 30.867 18 30.867z"
          stroke="#B5EAEE"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        width={48}
        height={48}
        fill="none"
        {...props}
        className={`_491:hidden ${props.className}`}
      >
        <path
          d="M24 40.83S5.25 30.33 5.25 17.58A9.75 9.75 0 0124 13.83a9.75 9.75 0 0118.75 3.75C42.75 30.33 24 40.83 24 40.83z"
          stroke="#B5EAEE"
        />
      </svg>
    </button>
  );
}

export default ChooseHeart;
