import { LucideCreditCard } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex gap-x-4 justify-center items-center">
      {/* Logo Image */}
      <div className="bg-primary h-11 w-11 flex justify-center items-center rounded-full">
        <LucideCreditCard className="text-white -rotate-12" />
      </div>

      {/* Logo Text */}
      <div className="flex">
        <span className="font-bold text-xl text-secondary">AceCoin</span>
        <span className="font-extralight text-xl text-secondary">Pay</span>
      </div>
    </div>
  );
};

export default Logo;
