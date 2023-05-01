import Link from "next/link";
import Container from "../Layouts/Container";
import Button from "../UI/Button";
import InputWrapper from "./InputWrapper";
import Input from "./Input";
import DescriptionInput from "./DescriptionInput";
import PhoneNumberInput from "./PhoneNumberInput";
import DateInput from "./DateInput";

const Checkout = () => {
  return (
    <Container>
      <h2 className="text-3xl mb-10">نهایی کردن خرید</h2>
      <form>
        <InputWrapper>
          <Input
            label="نام:"
            id="first_name"
            type="text"
            placeholder="ابوالفضل"
          />
          <Input
            label="نام خانوادگی:"
            id="last_name"
            type="text"
            placeholder="صفاری"
          />
        </InputWrapper>
        <InputWrapper>
          <DescriptionInput />
          <PhoneNumberInput />
        </InputWrapper>
        <InputWrapper>
          <DateInput />
        </InputWrapper>
        <div className="flex justify-center my-10">
          <Link href="/payment" className="w-full md:w-1/5">
            <Button type="submit" className="w-full bg-green-600">
              پرداخت
            </Button>
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default Checkout;
