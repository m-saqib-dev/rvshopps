import React, { useState } from 'react';
import { CartProduct } from '../../reducers/cartSlice';
import IncrAndDecrementBtn from '../IncandDecButton';
import './index.css';

type CardProps = {
  id: number;
  imgSrc: string;
  label: string;
  description: string;
  price: number;
  onCartHandler: (product: CartProduct) => void;
};

const Card: React.FC<CardProps> = React.memo(
  ({ id, imgSrc, label, price, description, onCartHandler }) => {
    const [qt, setQt] = useState(1);

    const onSubmit = () => {
      const product: CartProduct = {
        id: id,
        productImg: imgSrc,
        productName: label,
        productDescription: description,
        productPrice: price,
        productQuantity: qt,
      };
      onCartHandler(product);
    };
    const onPlusHandler = () => {
      setQt(qt + 1);
    };
    const onMinusHandler = () => {
      if (qt <= 1) {
        setQt(1);
      } else {
        setQt(qt - 1);
      }
    };
    return (
      <div className="card">
        <div className="card__imgcontainer">
          <img src={imgSrc} alt="img" className="card__img" />
        </div>
        <h1 className="card__label">{label}</h1>
        <p className="card__desc">{description}</p>
        <p className="card__price">{price} PKR</p>
        <div className="btn__container btn__container--grid">
          <IncrAndDecrementBtn
            onMinusHandler={onMinusHandler}
            onPlusHandler={onPlusHandler}
            qt={qt}
          />
        </div>
        <button className="btn btn--buy">buy now</button>
        <button className="btn btn--cart" onClick={onSubmit}>
          add to cart
        </button>
      </div>
    );
  }
);

export default Card;
