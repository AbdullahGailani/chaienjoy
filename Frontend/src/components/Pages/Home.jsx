import MySlider from "../Slider";
import Topsale from "../Topsale";
export default function HomePage() {
  return (
    <div className="flex flex-col ">
      <MySlider />
      <BrakeLine />
      <Topsale />
    </div>
  );
}

function BrakeLine() {
  return (
    <div className="w-full h-[1px] bg-gray-300 my-4"></div>
  );
}
