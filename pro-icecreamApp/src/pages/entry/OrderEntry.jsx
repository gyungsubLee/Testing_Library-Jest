import Options from "./Options";

export default function OrderEntry() {
  return (
    <div>
      <h1>Design your sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}
