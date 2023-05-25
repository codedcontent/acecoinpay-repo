import CardNumberInputField from "./CardNumberInputField";
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

        {/* Card Number container */}
        <div className="mt-8">
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
      </div>
    </div>
  );
};

export default CardDetails;

//   const formatCardNumber = (input: string): string => {
//     // Remove any non-digit characters from the input
//     const cleanedInput = input.replace(/\D/g, "");

//     // Split the cleaned input into groups of four digits
//     const groups = cleanedInput.match(/.{1,4}/g);

//     // Join the groups with a space in between
//     if (groups) {
//       return groups.join("-");
//     } else {
//       return cleanedInput;
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const input = event.target.value;
//     const formattedInput = formatCardNumber(input);
//     setCardNumber(formattedInput);
//   };

{
  /* <input
          type="text"
          id="cardNumber"
          className="border-none outline-none w-full tracking-widest"
          value={cardNumber}
          onChange={handleChange}
          maxLength={19} // Maximum length of formatted card number: 4 groups of 4 digits + 3 spaces
        /> */
}
