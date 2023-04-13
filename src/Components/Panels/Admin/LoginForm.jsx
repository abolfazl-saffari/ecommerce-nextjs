const LoginForm = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div class="w-full relative max-w-md bg-slate-200 py-14 px-8 rounded-md">
        <h2 className="text-center text-3xl">ورود به پنل مدیریت فروشگاه</h2>
        <form className="mt-8" action="#" method="POST">
          <div className="rounded-md shadow-sm">
            <div className="mb-3">
              <label htmlFor="email-address">نام کاربری:</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="relative block w-full py-1.5 mt-2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">رمزعبور:</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="relative block w-full py-1.5 mt-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ورود
          </button>
        </form>
        <a className="text-sm text-blue-500 absolute left-2.5 bottom-2.5 hover:underline">
          بازگشت به سایت
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
