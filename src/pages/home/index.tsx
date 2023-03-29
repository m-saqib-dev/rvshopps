import { useCallback, useEffect, useState } from 'react';
import Card from '../../Component/card';
import { CartProduct, setCart } from '../../reducers/cartSlice';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { setProduct } from '../../reducers/productSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const productArray = Object.values(productData.products);
  const { products } = useAppSelector((state) => state.product);
  const { products: pr } = useAppSelector((state) => state.cart);
  useEffect(() => {
    dispatch(setProduct(productArray));
  }, []);

  const cartHandler = useCallback(
    (product: CartProduct) => {
      try {
        dispatch(setCart(product));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const list = products.map((data) => (
    <div className="product__list" key={data.id}>
      <Card
        id={data.id}
        label={data.productName}
        imgSrc={data.productImg}
        description={data.productDescription}
        price={data.productPrice}
        onCartHandler={cartHandler}
      />
    </div>
  ));
  return <div className="flex flex-wrap justify-center  px-2">{list}</div>;
};
const productData = {
  products: [
    {
      id: 1,
      productImg:
        'https://media.istockphoto.com/id/182186814/photo/headset.jpg?s=612x612&w=0&k=20&c=TFH07JUjbHlCM_ScVj2WhvL5HZuVP6QsZh8gQ5THAwU=',
      productName: 'Product 1',
      productDescription: 'This is the description for Product 1.',
      productPrice: 9.99,
    },
    {
      id: 2,
      productImg:
        'https://media.istockphoto.com/id/182186814/photo/headset.jpg?s=612x612&w=0&k=20&c=TFH07JUjbHlCM_ScVj2WhvL5HZuVP6QsZh8gQ5THAwU=',
      productName: 'Product 2',
      productDescription: 'This is the description for Product 2.',
      productPrice: 14.99,
    },
    {
      id: 3,
      productImg:
        'https://media.istockphoto.com/id/182186814/photo/headset.jpg?s=612x612&w=0&k=20&c=TFH07JUjbHlCM_ScVj2WhvL5HZuVP6QsZh8gQ5THAwU=',
      productName: 'Product 3',
      productDescription: 'This is the description for Product 3.',
      productPrice: 19.99,
    },
    {
      id: 4,
      productImg:
        'https://media.istockphoto.com/id/182186814/photo/headset.jpg?s=612x612&w=0&k=20&c=TFH07JUjbHlCM_ScVj2WhvL5HZuVP6QsZh8gQ5THAwU=',
      productName: 'Product 4',
      productDescription: 'This is the description for Product 1.',
      productPrice: 9.99,
    },
    {
      id: 5,
      productImg:
        'https://media.istockphoto.com/id/182186814/photo/headset.jpg?s=612x612&w=0&k=20&c=TFH07JUjbHlCM_ScVj2WhvL5HZuVP6QsZh8gQ5THAwU=',
      productName: 'Product 5',
      productDescription: 'This is the description for Product 2.',
      productPrice: 14.99,
    },
    {
      id: 7,
      productImg:
        'https://media.istockphoto.com/id/182186814/photo/headset.jpg?s=612x612&w=0&k=20&c=TFH07JUjbHlCM_ScVj2WhvL5HZuVP6QsZh8gQ5THAwU=',
      productName: 'Product 7',
      productDescription: 'This is the description for Product 3.',
      productPrice: 19.99,
    },
  ],
};

export default Home;
