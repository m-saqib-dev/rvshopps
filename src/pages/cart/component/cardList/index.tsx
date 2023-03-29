import React, { useState } from 'react';
import IncrAndDecrementBtn from '../../../../Component/IncandDecButton';
import { CartProduct } from '../../../../reducers/cartSlice';
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
    <div className=" text-white text-xs flex items-center justify-between px-2">
      <img className="h-16" src={productImg} alt="" />
      <div className="text__container">
        <h1 className="cart__name">{productName}</h1>
      </div>
      <div className="flex flex-col  space-y-2">
        <p className="">Total : {productPrice}</p>
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
