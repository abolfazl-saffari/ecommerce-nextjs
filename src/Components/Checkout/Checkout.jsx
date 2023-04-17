import Link from "next/link";
import Container from "../Layouts/Container";
import Button from "../UI/Button";

const Checkout = () => {
  return (
    <Container>
      <h2 className="text-3xl mb-10">نهایی کردن خرید</h2>
      <form>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-6 z-0">
            <label htmlFor="first_name" className="text-lg text-black">
              نام :
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="w-full block text-sm rounded-lg border mt-3 py-4 px-2 text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
              placeholder="ابوالفضل"
              required
            />
          </div>
          <div className="w-full mb-6 z-0">
            <label htmlFor="last_name" className="text-lg text-black">
              نام خانوادگی :
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="w-full block text-sm rounded-lg border mt-3 py-4 px-2 text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
              placeholder="صفاری"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-6 z-0">
            <label htmlFor="address" className="text-lg text-black">
              آدرس :
            </label>
            <textarea
              name="address"
              id="address"
              rows="4"
              className="w-full block text-sm rounded-lg resize-none mt-3 py-4 px-2 border text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
              placeholder="تهران یافت آباد"
              required
            ></textarea>
          </div>
          <div className="w-full mb-6 z-0">
            <label htmlFor="phone_number" className="text-lg text-black">
              تلفن همراه :
              <span className="ms-3 text-gray-400">
                جهت هماهنگی ارسال سفارش
              </span>
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="w-full block text-sm rounded-lg border mt-3 py-4 px-2 text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
              placeholder="09023547080"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-6 z-0">
            <label
              htmlFor="delivery_date"
              className="peer-focus:font-medium text-lg text-black"
            >
              تاریخ تحویل :
            </label>
            <input
              type="date"
              name="delivery_date"
              id="delivery_date"
              className="w-full block text-sm rounded-lg border mt-3 py-4 px-2 text-gray-900 bg-gray-50 border-gray-400 sm:text-xs"
              defaultValue="2023-04-12"
              required
            />
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Button type="submit" className="w-full py-4 bg-green-600 md:w-1/5">
            <Link href="/payment">پرداخت</Link>
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Checkout;
