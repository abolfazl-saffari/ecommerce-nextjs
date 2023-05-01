const OverlayShadow = ({ hamburgerMenu, showHamburgerMenu, onCloseShadow }) => {
  return (
    <div
      className={`${
        hamburgerMenu
          ? `w-full h-full fixed left-0 top-0 opacity-75 z-10 ${
              showHamburgerMenu ? "" : "hidden"
            } bg-white lg:hidden`
          : "w-full h-full fixed left-0 top-0 opacity-75 z-10 bg-white"
      }`}
      onClick={onCloseShadow}
    ></div>
  );
};

export default OverlayShadow;
