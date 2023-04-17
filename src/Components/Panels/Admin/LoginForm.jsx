import FormInput from "./FormInput";
import Button from "@/Components/UI/Button";
import Anchor from "./Anchor";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-500">
      <div class="w-full relative max-w-md bg-slate-900 py-14 px-8 rounded-md">
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
          <Button className="w-full text-sm px-3 py-2 mt-5 rounded-md bg-slate-700">
            <Link href="/adminPanel/products">ورود</Link>
          </Button>
        </form>
        <Anchor href="/" className="absolute left-2.5 bottom-2.5">
          بازگشت به سایت
        </Anchor>
      </div>
    </div>
  );
};

export default LoginForm;
