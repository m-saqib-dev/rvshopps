import { FaMinus, FaMinusCircle, FaPlus, FaPlusCircle } from 'react-icons/fa';
interface ButtonProp {
  qt: number;
  onMinusHandler: () => void;
  onPlusHandler: () => void;
}
const IncrAndDecrementBtn: React.FC<ButtonProp> = ({
  qt,
  onMinusHandler,
  onPlusHandler,
}) => {
  return (
    <div className="text-xs flex justify-center items-center">
      <button className="p-1 bg-gray-700 rounded-full" onClick={onMinusHandler}>
        <FaMinus />
      </button>
      <span className=" text-center p-1 w-6 h-fit">{qt}</span>
      <button className="p-1 bg-gray-700 rounded-full" onClick={onPlusHandler}>
        <FaPlus />
      </button>
    </div>
  );
};

export default IncrAndDecrementBtn;
