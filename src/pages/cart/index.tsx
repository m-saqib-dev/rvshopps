import React, { useEffect, useState } from 'react';
import { emptyCart, setTotal } from '../../reducers/cartSlice';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import CartList from './component/cardList';

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
    <div className="flex justify-center">
      <div className="absolute w-full h-5/6 text-white p-2 flex justify-center md:w-96  ">
        <div className="flex flex-col w-11/12 absolute justify-center">
          <div className="flex justify-between py-5">
            <h3 className="text-xl font-bold font-sans">Cart</h3>
            <button className="text-red-600" onClick={removeAllHandler}>
              Remove all
            </button>
          </div>
        </div>
        <div className=" scroll-p-6 self-center flex flex-col w-full absolute h-3/5 overflow-auto">
          {List}
        </div>
        <div className="flex  justify-between px-2 items-center self-end w-11/12">
          <h1 className="">total:{total}</h1>
          <button className="p-2 bg-blue-900 rounded-lg">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
