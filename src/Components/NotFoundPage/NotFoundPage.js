import Anchor from "../Panels/Admin/Anchor";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="text-9xl animate-pulse">404</p>
      <Anchor href="/" className="z-50">
        {" "}
        بازگشت به خانه
      </Anchor>
    </div>
  );
};

export default NotFoundPage;
