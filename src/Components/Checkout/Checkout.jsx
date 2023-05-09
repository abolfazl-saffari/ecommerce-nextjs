import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "@/redux/actions/cartAction";
import { useRouter } from "next/router";
import Container from "../Layouts/Container";
import Button from "../UI/Button";
import InputWrapper from "./InputWrapper";
import Input from "./Input";
import DescriptionInput from "./DescriptionInput";
import PhoneNumberInput from "./PhoneNumberInput";
import DateInput from "./DateInput";

const Checkout = () => {
  const userInfo = useSelector((store) => store).cart.userInfo;
  const nameInputRef = useRef();
  const lNameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  const dispatch = useDispatch();
  const router = useRouter();

  const userInfoFormSubmitHandler = (e) => {
    e.preventDefault();
    const userInfo = {
      name: nameInputRef.current.value,
      lName: lNameInputRef.current.value,
      phoneNumber: phoneNumberInputRef.current.value,
      address: descriptionInputRef.current.value,
      deliveryDate: dateInputRef.current.value,
    };

    dispatch(addUserInfo(userInfo));
    router.push("/payment");
  };

  return (
    <Container>
      <h2 className="text-3xl mb-10">نهایی کردن خرید</h2>
      <form onSubmit={userInfoFormSubmitHandler}>
        <InputWrapper>
          <Input
            ref={nameInputRef}
            label="نام:"
            id="first_name"
            type="text"
            placeholder="ابوالفضل"
            defaultValue={userInfo.name}
          />
          <Input
            ref={lNameInputRef}
            label="نام خانوادگی:"
            id="last_name"
            type="text"
            placeholder="صفاری"
            defaultValue={userInfo.lName}
          />
        </InputWrapper>
        <InputWrapper>
          <DescriptionInput
            ref={descriptionInputRef}
            defaultValue={userInfo.address}
          />
          <PhoneNumberInput
            ref={phoneNumberInputRef}
            defaultValue={userInfo.phoneNumber}
          />
        </InputWrapper>
        <InputWrapper>
          <DateInput ref={dateInputRef} defaultValue={userInfo.deliveryDate} />
        </InputWrapper>
        <div className="flex justify-center my-10">
          <Button type="submit" className="w-full py-5 bg-green-600 md:w-1/4">
            پرداخت
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Checkout;
