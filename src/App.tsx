import CardDetails from "./components/CardDetails";

const App = () => {
  return (
    <main className="bg-white py-12 px-16 h-screen flex gap-x-14">
      {/* Card Details */}
      <CardDetails />

      {/* Order Summary */}
      <div className="w-[30%] h-80 bg-red-600"></div>
    </main>
  );
};

export default App;
