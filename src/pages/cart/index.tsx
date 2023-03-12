import React, { useEffect, useState } from 'react';
import { emptyCart, setTotal } from '../../reducers/cartSlice';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import CartList from './component/cardList';
import './index.css';

const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const List = products.map((val) => (
    <div key={val.id}>
      <CartList
        id={val.id}
        productImg={val.productImg}
        productName={val.productName}
        productDescription={val.productDescription}
        productPrice={val.productPrice}
        productQuantity={val.productQuantity}
      />
    </div>
  ));
  useEffect(() => {
    const ex = products.findIndex((product) => product.id);
    const qt = products.map((val) => val.productPrice);
    if (ex !== -1) {
      const qtSum = qt.reduce((p, c) => p + c);
      dispatch(setTotal(qtSum));
    }
  }, [products]);

  const removeAllHandler = () => {
    dispatch(emptyCart());
  };
  return (
    <div className="carts">
      <div className="cart__container">
        <div className="cart__header">
          <h3 className="cart__heading">Shopping Cart</h3>
          <button className="cart__action" onClick={removeAllHandler}>
            Remove all
          </button>
        </div>
        {List}
      </div>
      <div className="textbtn__container">
        <div className="text-total">total:{total}</div>
        <button className="btn btn--checkout">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
