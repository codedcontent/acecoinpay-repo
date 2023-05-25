import { IoIosKeypad } from "react-icons/io";

const CardPassword = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-10 w-full">
      {/* Card password info text */}
      <div className="md:space-y-2 w-full md:w-1/2">
        <p className="font-semibold">Password</p>

        <p className="text-sm text-gray-400">Enter your Dynamic password</p>
      </div>

      {/* CVV number text field */}
      <div className="flex items-center justify-center w-full md:w-1/2 border-2 border-gray-200 rounded-md px-4 py-3 gap-4 focus-within:ring-2 focus-within:ring-primary focus-within:outline-none">
        <input
          type="password"
          className="flex-1 outline-none text-center w-full text-secondary font-bold"
          maxLength={8}
        />

        <IoIosKeypad className="text-dark-gray text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default CardPassword;
