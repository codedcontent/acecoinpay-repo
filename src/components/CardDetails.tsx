import CVVNumber from "./CVVNumber";
import CardNumberInputField from "./CardNumberInputField";
import CardPassword from "./CardPassword";
import ExpiryDate from "./ExpiryDate";
import Logo from "./ui/Logo";
import TimeClock from "./ui/TimeClock";
import { MdModeEdit } from "react-icons/md";

const CardDetails = () => {
  return (
    <div className="w-[70%] h-full">
      <div className="w-full">
        {/* Logo and time */}
        <div className="flex w-full justify-between items-center">
          <Logo />

          <TimeClock />
        </div>

        {/* Card number container */}
        <div className="mt-10">
          <div className="flex justify-between items-center">
            {/* Card Num. text */}
            <div className="space-y-2">
              <p className="font-semibold">Card Number</p>

              <p className="text-sm text-gray-400">
                Enter the 16-digit card number on the card
              </p>
            </div>

            {/* Edit button */}
            <button className="flex gap-1 justify-center items-center outline-none border-none">
              <MdModeEdit className="text-primary text-xl" />

              <p className="font-semibold text-sm text-primary">Edit</p>
            </button>
          </div>

          {/* Card Number text field */}
          <div className="mt-6 w-full">
            <CardNumberInputField />
          </div>
        </div>

        {/* CVV number container */}
        <div className="mt-10">
          <CVVNumber />
        </div>

        {/* Expiry date container */}
        <div className="mt-10">
          <ExpiryDate />
        </div>

        {/* Card password container */}
        <div className="mt-10">
          <CardPassword />
        </div>

        {/* Pay now button */}
        <div className="mt-10">
          <button className="capitalize w-full p-4 bg-primary text-center text-white rounded-md hover:bg-primary/95 font-bold">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
