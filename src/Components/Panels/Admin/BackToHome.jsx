const BackToHome = ({ className }) => {
  return (
    <a
      className={`text-blue-500 text-sm hover:underline cursor-pointer ${className}`}
    >
      بازگشت به سایت
    </a>
  );
};

export default BackToHome;
