import Stepper from "./Components/Stepper";
import "./styles.css";
const STEPS_CONFIG = [
  {
    name: "Customer Info",
    Component: () => <div> Customer Info </div>,
  },
  {
    name: "Shipping Details",
    Component: () => <div> Shipping Details </div>,
  },
  {
    name: "Payment Details",
    Component: () => <div> Payment Details </div>,
  },
  {
    name: "Delivery Info",
    Component: () => <div> Delivery Info </div>,
  },
];
export default function App() {
  return (
    <div className="App">
      <Stepper stepsConfig={STEPS_CONFIG} />
    </div>
  );
}
