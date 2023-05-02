const HamburgerDrawer = ({ children, showHamburgerMenu }) => {
  return (
    <div
      className={`fixed h-screen w-5/6 top-0 bottom-0 left-0 ${
        showHamburgerMenu ? "translate-x-0" : "-translate-x-full"
      } opacity-[0.99] z-50 transition-transform ease-in duration-700 delay-75 bg-slate-900 md:w-3/6 lg:hidden`}
    >
      {children}
    </div>
  );
};

export default HamburgerDrawer;
