import Link from "next/link";
import FormInput from "./FormInput";
import Button from "@/Components/UI/Button";
import Anchor from "./Anchor";

const LoginForm = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-500">
      <div className="max-w-mdw-full relative rounded-md py-14 px-8 bg-slate-900">
        <h2 className="text-center text-3xl text-white">
          ورود به پنل مدیریت فروشگاه
        </h2>
        <form className="mt-8">
          <FormInput
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            label="نام کاربری:"
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            label="رمزعبور:"
          />
          <Link href="/adminPanel/products">
            <Button className="w-full text-sm rounded-md px-3 py-2 mt-5 bg-slate-700">
              ورود
            </Button>
          </Link>
        </form>
        <Anchor href="/" className="absolute left-2.5 bottom-2.5">
          بازگشت به سایت
        </Anchor>
      </div>
    </div>
  );
};

export default LoginForm;
