import { useState, useEffect, useRef, ChangeEvent } from "react";
import masterCardOriginal from "../assets/svgs/mastercard-plain.svg";
import { MdVerified } from "react-icons/md";

const CardNumberInputField = () => {
  const [inputValues, setInputValues] = useState<number[]>([0, 0, 0, 0]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const inputContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputValues.length);
  }, [inputValues]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const parsedValue = parseInt(value, 10);

    if (!isNaN(parsedValue) && value.length <= 4) {
      const newInputValues = [...inputValues];
      newInputValues[index] = parsedValue;
      setInputValues(newInputValues);

      if (value.length === 4 && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  return (
    <div
      className="w-full border-2 border-gray-200 rounded-md px-2 md:px-4 py-3 flex justify-between items-center gap-4 md:gap-6 focus-within:ring-2 focus-within:ring-primary focus-within:outline-none"
      ref={inputContainerRef}
      onClick={() => {
        if (!inputContainerRef.current?.contains(document.activeElement)) {
          inputRefs.current[0]?.focus();
        }
      }}
    >
      {/* Card type logo */}
      <img
        src={masterCardOriginal}
        alt="mastercard logo"
        className="h-8 md:h-10 w-8 md:w-10"
      />

      {/* Card number input */}
      <div className="flex-1 w-full flex justify-evenly md:justify-start items-center">
        {inputValues.map((value, index) => (
          <div className="w-max flex" key={index}>
            <input
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              value={value.toString()}
              onChange={(event) => handleInputChange(event, index)}
              maxLength={4}
              className="border-none outline-none w-12 md:w-20 md:tracking-widest md:text-center"
            />

            {index !== 3 ? <span className="font-bold">-</span> : null}
          </div>
        ))}
      </div>

      {/* verified logo */}
      <MdVerified className="text-verify-blue text-2xl" />
    </div>
  );
};

export default CardNumberInputField;
