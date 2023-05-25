import { useState } from "react";
import masterCardOriginal from "../assets/svgs/mastercard-plain.svg";
import { MdVerified } from "react-icons/md";

const CardNumberInputField = () => {
  const [cardNumber, setCardNumber] = useState<string>("");

  const formatCardNumber = (input: string): string => {
    // Remove any non-digit characters from the input
    const cleanedInput = input.replace(/\D/g, "");

    // Split the cleaned input into groups of four digits
    const groups = cleanedInput.match(/.{1,4}/g);

    // Join the groups with a space in between
    if (groups) {
      return groups.join("-");
    } else {
      return cleanedInput;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const formattedInput = formatCardNumber(input);
    setCardNumber(formattedInput);
  };

  return (
    <div className="w-full border-2 border-gray-200 rounded-md px-4 py-3 flex justify-between items-center gap-6">
      {/* Card type logo */}
      <img
        src={masterCardOriginal}
        alt="mastercard logo"
        className="h-10 w-10"
      />

      {/* Card number input */}
      <div className="flex-1 w-full">
        <input
          type="text"
          id="cardNumber"
          className="border-none outline-none w-full tracking-widest"
          value={cardNumber}
          onChange={handleChange}
          maxLength={19} // Maximum length of formatted card number: 4 groups of 4 digits + 3 spaces
        />
      </div>

      {/* verified logo */}
      <MdVerified className="text-verify-blue text-2xl" />
    </div>
  );
};

export default CardNumberInputField;
