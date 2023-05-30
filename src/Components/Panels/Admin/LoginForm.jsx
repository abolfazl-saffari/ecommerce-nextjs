import FormInput from "./FormInput";
import Button from "@/Components/UI/Button";
import Anchor from "./Anchor";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "@/redux/actions/userAction";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "abolfazldrx@yahoo.com",
      password: "12345678",
    },
  });
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store).user;
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      router.push("/adminPanel/products");
    }
  }, [user]);

  const formSubmitHandler = (data) => {
    dispatch(getUser({ username: data.email, password: data.password }));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-500">
      <div className="max-w-mdw-full relative rounded-md py-14 px-8 bg-slate-900">
        <h2 className="text-center text-3xl text-white">
          ورود به پنل مدیریت فروشگاه
        </h2>
        <form onSubmit={handleSubmit(formSubmitHandler)} className="mt-8">
          <FormInput
            register={register}
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            label="نام کاربری:"
          />
          <FormInput
            register={register}
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            label="رمزعبور:"
          />
          <Button
            type="submit"
            className="w-full text-sm rounded-md px-3 py-2 mt-5 bg-slate-700"
          >
            ورود
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
