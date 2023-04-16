import Link from "next/link";
import Container from "../Layouts/Container";
import Button from "../UI/Button";

const Checkout = () => {
  return (
    <Container>
      <h2 className="text-3xl mb-10">نهایی کردن خرید</h2>
      <form>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="z-0 w-full mb-6 group">
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium text-lg text-black"
            >
              نام :
            </label>
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block mt-3 py-4 px-2 w-full text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs"
              placeholder="ابوالفضل"
              required
            />
          </div>
          <div className="z-0 w-full mb-6 group">
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium text-lg text-black"
            >
              نام خانوادگی :
            </label>
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block mt-3 py-4 px-2 w-full text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs"
              placeholder="صفاری"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="z-0 w-full mb-6 group">
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium text-lg text-black"
            >
              آدرس :
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="تهران یافت آباد"
              className="block resize-none mt-3 py-4 px-2 w-full text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs"
            ></textarea>
          </div>
          <div className="z-0 w-full mb-6 group">
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium text-lg text-black"
            >
              تلفن همراه :
              <span className="text-gray-400 ms-3">
                جهت هماهنگی ارسال سفارش{" "}
              </span>
            </label>
            <input
              type="tel"
              name="floating_first_name"
              id="floating_first_name"
              className="block mt-3 py-4 px-2 w-full text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs"
              placeholder="09023547080"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="z-0 w-full mb-6 group">
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium text-lg text-black"
            >
              تاریخ تحویل :
            </label>
            <input
              type="date"
              name="floating_first_name"
              id="floating_first_name"
              className="block mt-3 py-4 px-2 w-full text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs"
              defaultValue="2023-04-12"
              required
            />
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Button type="submit" className="w-full md:w-1/5 bg-green-600 py-4">
            <Link href="/payment">پرداخت</Link>
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Checkout;
