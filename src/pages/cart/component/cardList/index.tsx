import React, { useState } from 'react';
import IncrAndDecrementBtn from '../../../../Component/IncandDecButton';
import { CartProduct } from '../../../../reducers/cartSlice';
import './index.css';
const CartList: React.FC<CartProduct> = ({
  id,
  productDescription,
  productImg,
  productName,
  productPrice,
  productQuantity,
}) => {
  const [cartQt, setCartQt] = useState(productQuantity);
  const onPlusHandler = () => {
    setCartQt(cartQt + 1);
  };
  const onMinusHandler = () => {
    if (cartQt <= 1) {
      setCartQt(1);
    } else {
      setCartQt(cartQt - 1);
    }
  };
  return (
    <div className="cart">
      <img className="cart__img" src={productImg} alt="" />
      <div className="text__container">
        <h1 className="cart__name">{productName}</h1>
        <p className="cart__description">{productDescription}</p>
      </div>
      <p className="cart__price">Total : {productPrice}</p>
      <div className="btn__container">
        <IncrAndDecrementBtn
          onPlusHandler={onPlusHandler}
          onMinusHandler={onMinusHandler}
          qt={cartQt}
        />
      </div>
    </div>
  );
};

export default CartList;
