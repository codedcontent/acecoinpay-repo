import { IoIosKeypad } from "react-icons/io";

const CVVNumber = () => {
  return (
    <div className="flex justify-between items-center gap-10 w-full">
      {/* CVV number info text */}
      <div className="space-y-2 w-1/2">
        <p className="font-semibold">CVV Number</p>

        <p className="text-sm text-gray-400">
          Enter the 3 or 4 digit card number on the card
        </p>
      </div>

      {/* CVV number text field */}
      <div className="flex items-center justify-center w-1/2 border-2 border-gray-200 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-primary focus-within:outline-none">
        <input
          type="text"
          className="flex-1 border-none outline-none text-center w-full text-secondary font-bold"
          maxLength={4}
        />

        <IoIosKeypad className="text-dark-gray text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default CVVNumber;
