const size = {
  mobile: "768px",
  tablet: "992px",
  desktop: "1200px",
};

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width:  ${size.tablet} and (max-width: 990px))`,
  desktop: `(min-width: ${size.desktop})`,
  mobilePadding: "20px",
  desktopPadding: "65px",
};

export default theme;
