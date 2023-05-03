const HamburgerLogo = ({ onHamburgerMenuClicked }) => {
  return (
    <div className="flex lg:hidden" onClick={onHamburgerMenuClicked}>
      <div className="space-y-2">
        <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
        <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
        <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
      </div>
    </div>
  );
};

export default HamburgerLogo;
