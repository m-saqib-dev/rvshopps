import { FaMinus, FaMinusCircle, FaPlus, FaPlusCircle } from 'react-icons/fa';
import './index.css';
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
    <div className="btn__container">
      <button className=" btn btn--minus" onClick={onMinusHandler}>
        <FaMinus />
      </button>
      <span className="card__count">{qt}</span>
      <button className="btn btn--plus" onClick={onPlusHandler}>
        <FaPlus />
      </button>
    </div>
  );
};

export default IncrAndDecrementBtn;
