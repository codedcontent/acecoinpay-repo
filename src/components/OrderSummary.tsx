import creditCardChip from "../assets/svgs/credit-card-chip.svg";
import { RiWifiFill } from "react-icons/ri";
import { DiApple } from "react-icons/di";
import { IoReceiptSharp } from "react-icons/io5";
import masterCardIcon from "../assets/svgs/mastercard-desinged.svg";

const OrderSummary = () => {
  return (
    <div className="w-full md:w-[30%] h-full relative pt-10 md:pt-24 md:pb-0">
      {/* Blue banner */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-primary rounded-sm"></div>

      {/*  */}
      {/*  */}
      {/* Mastercard card Design */}
      <div className="h-48 md:h-72 w-[90%] md:w-[75%] mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 rounded-xl shadow-md pt-4 md:pt-8 pb-2 md:pb-6 px-6 overflow-hidden bg-white/75 backdrop-blur-md flex flex-col justify-between items-start bg-cover bg-center">
        {/*  */}
        {/* Circle overlays */}
        <div className="rounded-full border-2 border-gray-blue w-[500px] h-[500px] absolute -bottom-[250px] -right-[190px] flex justify-center items-center">
          <div className="rounded-full border-2 border-gray-blue w-[400px] h-[400px]"></div>
        </div>

        {/*  */}
        {/* Card chip and related stuff */}
        <div className="flex justify-between items-center w-full">
          <img
            src={creditCardChip}
            alt="credit-card-chip-icon"
            className="h-8 md:h-11 w-8 md:w-11 rounded-full rotate-90"
          />

          <RiWifiFill className="text-3xl md:text-4xl text-secondary" />
        </div>

        {/* Card owners info */}
        <div className="gap-0 md:gap-4 flex flex-col w-full z-10">
          {/* Name and card number */}
          <div className="w-full">
            <p className="text-secondary font-medium text-sm">
              Johnathan Michael
            </p>
            <div className="flex gap-2 justify-start items-center">
              <span className="text-secondary font-bold text-2xl">••••</span>
              <span className="text-secondary font-bold">1234</span>
            </div>
          </div>

          <div className="flex gap-2 justify-between items-center">
            <span className="text-secondary font-semibold">09/22</span>
            <img
              src={masterCardIcon}
              alt="mastercard-logo"
              className="h-10 w-10"
            />
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/* Order summary */}
      <div className="h-max md:h-full bg-gray-blue rounded-xl pt-44 md:pt-60 space-y-6 md:space-y-8 pb-4 md:pb-0">
        {/* Order info summary */}
        <div className="w-full space-y-4 px-6 md:px-8">
          {/* Company info */}
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-dark-gray text-sm">Company</span>

            <span className=" flex gap-2 justify-center items-center">
              <DiApple className="text-secondary text-xl" />

              <span className="font-bold text-secondary text-sm">Apple</span>
            </span>
          </div>

          {/* Order no. info */}
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-dark-gray text-sm">
              Order Number
            </span>

            <span className="font-bold text-secondary text-sm">1266201</span>
          </div>

          {/* Product info */}
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-dark-gray text-sm">Product</span>

            <span className="font-bold text-secondary text-sm">
              MackBook Air
            </span>
          </div>

          {/* VAT info */}
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-dark-gray text-sm">VAT(20%)</span>

            <span className="font-bold text-secondary text-sm">$100.0</span>
          </div>
        </div>

        {/* Styles receipt punch holes */}
        <div className="flex justify-between items-center w-full relative">
          <div className="h-6 md:h-8 w-6 md:w-8 bg-white rounded-full absolute -left-2 md:-left-4"></div>

          <hr className="border-dashed border-2 border-dark-gray w-full" />

          <div className="h-6 md:h-8 w-6 md:w-8 bg-white rounded-full absolute -right-2 md:-right-4"></div>
        </div>

        {/* Total Payment */}
        <div className="flex justify-between items-center px-8">
          <div className="flex flex-col">
            <span className="font-medium text-dark-gray text-sm">
              You have to Pay
            </span>

            <div>
              <span className="font-black text-3xl text-secondary">549</span>
              <span className="text-secondary">.99</span>
              <span className="text-dark-gray ml-1">USD</span>
            </div>
          </div>

          <IoReceiptSharp className="text-secondary text-2xl rotate-180" />
        </div>
      </div>

      {/*  */}
      <div className="my-5 md:hidden box-border">
        <button
          type="submit"
          className="capitalize w-full p-4 bg-primary text-center text-white rounded-md hover:bg-primary/95 font-bold focus:outline-none border-none"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
