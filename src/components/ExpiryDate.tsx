const ExpiryDate = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-10 w-full">
      {/* Expiry date info text */}
      <div className="md:space-y-2 w-full md:w-1/2">
        <p className="font-semibold">Expiry Date</p>

        <p className="text-sm text-gray-400">
          Enter the expiry date on the card
        </p>
      </div>

      {/* Expiry date text field */}
      <div className="flex gap-2 items-center justify-center w-full md:w-1/2">
        <input
          type="text"
          className="flex-1 focus:outline-none text-center w-full text-secondary font-bold focus:bg-primary/5 focus:ring-2 ring-primary border-2 border-gray-200 rounded-md px-4 py-3"
          maxLength={2}
        />

        <span className="font-semibold text-medium">/</span>

        <input
          type="text"
          className="flex-1 focus:outline-none text-center w-full text-secondary font-bold focus:bg-primary/5 focus:ring-2 ring-primary border-2 border-gray-200 rounded-md px-4 py-3"
          maxLength={2}
        />
      </div>
    </div>
  );
};

export default ExpiryDate;
