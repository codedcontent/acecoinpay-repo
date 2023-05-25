import CardDetails from "./components/CardDetails";
import OrderSummary from "./components/OrderSummary";

const App = () => {
  return (
    <main className="bg-white py-12 px-16 h-screen flex gap-x-14">
      {/* Card Details */}
      <CardDetails />

      {/* Order Summary */}
      <OrderSummary />
    </main>
  );
};

export default App;
