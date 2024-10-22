import CompletedOrders from "./CompletedOrders";
import PenddingOrders from "./PenddingOrders";

export default function Orders() {
  return (
    <div>
      <PenddingOrders />
      <CompletedOrders />
    </div>
  );
}
