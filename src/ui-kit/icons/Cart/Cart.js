function Cart({ isMini = false, ...props }) {
  return isMini ? (
    <svg width={17} height={17} fill="none" {...props}>
      <path
        d="M12 11.992H4.862L3.12 2.405a.5.5 0 00-.488-.413H1.5M5.5 14.492a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM12 14.492a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        stroke="#B5EAEE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.406 9.492h7.85a.993.993 0 00.982-.819L14 4.493H3.5"
        stroke="#B5EAEE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg width={36} height={37} fill="none" {...props}>
      <path
        d="M25.875 26.205H9.815L5.893 4.633a1.125 1.125 0 00-1.097-.928H2.25"
        stroke="#B5EAEE"
      />
      <path
        d="M11.25 31.83a2.813 2.813 0 100-5.625 2.813 2.813 0 000 5.625zM25.875 31.83a2.813 2.813 0 100-5.625 2.813 2.813 0 000 5.625zM8.79 20.58h17.662a2.236 2.236 0 002.207-1.842l1.716-9.408H6.75"
        stroke="#B5EAEE"
      />
    </svg>
  );
}

export default Cart;
