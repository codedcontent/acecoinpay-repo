import CardDetails from "./components/CardDetails";
import OrderSummary from "./components/OrderSummary";

const App = () => {
  return (
    <main className="bg-white p-6 md:py-12 md:px-16 h-screen flex flex-col md:flex-row gap-x-14 gap-y-10 md:gap-y-0">
      {/* Card Details */}
      <CardDetails />

      {/* Order Summary */}
      <OrderSummary />
    </main>
  );
};

export default App;
