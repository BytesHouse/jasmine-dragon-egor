const FavoriteButton = ({ children }) => {
  return (
    <button className="flex items-center gap-[10px] border border-[var(--blue-light)] self-start px-[45px] py-[15px]">
      <span>
        <svg width={24} height={24} viewBox="0 0 48 43" fill="none">
          <path
            d="M24 42.125c-1.505-1.31-3.206-2.674-5.005-4.125h-.023C12.637 32.913 5.457 27.156 2.286 20.258a16.757 16.757 0 01-1.62-7.008 12.243 12.243 0 013.766-8.84A12.7 12.7 0 0113.5.876c2.755.004 5.45.786 7.765 2.253A13 13 0 0124 5.458a13.42 13.42 0 012.737-2.33A14.544 14.544 0 0134.5.875a12.7 12.7 0 019.068 3.536 12.243 12.243 0 013.765 8.84 16.756 16.756 0 01-1.62 7.019C42.544 27.166 35.367 32.922 29.032 38l-.024.019c-1.801 1.44-3.5 2.805-5.005 4.125L24 42.125zM13.5 5.458a8.33 8.33 0 00-5.833 2.274 7.592 7.592 0 00-2.334 5.518 12.315 12.315 0 001.195 5.106 28.258 28.258 0 005.966 7.957c2.313 2.291 4.973 4.51 7.273 6.375.637.516 1.286 1.036 1.935 1.556l.408.328c.623.5 1.267 1.017 1.89 1.526l.03-.027.014-.012h.014l.021-.016h.024l.042-.034.095-.076.017-.014.025-.018h.014l.021-.018 1.55-1.25.406-.327c.655-.525 1.304-1.045 1.94-1.56 2.302-1.866 4.964-4.082 7.276-6.385a28.226 28.226 0 005.967-7.955 12.28 12.28 0 001.21-5.156 7.593 7.593 0 00-2.333-5.5A8.329 8.329 0 0034.5 5.458a9.384 9.384 0 00-6.977 3.005L24 12.45l-3.523-3.987A9.384 9.384 0 0013.5 5.458z"
            fill="#B5EAEE"
          />
        </svg>
      </span>
      <span>{children}</span>
    </button>
  );
};

export default FavoriteButton;
