import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import {
  AiOutlineMenu,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../reducers/hooks';
import PageLink from './component/pagelink/index';
import Search from './component/search/index';

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [st, setSt] = useState(0);
  const { products } = useAppSelector((state) => state.cart);
  const ex = products.findIndex((product) => product.id);
  const qt = products.map((val) => val.productQuantity);
  useEffect(() => {
    if (ex !== -1) {
      const qtSum = qt.reduce((p, c) => p + c);
      setSt(qtSum);
    }
  }, [products]);
  const { isAuthanticated, userData } = useAppSelector((state) => state.user);

  return (
    <nav className="mb-5">
      <ul className="text-white flex  justify-end items-center pt-2">
        <Search />
        <PageLink>
          <Link to="/">Home</Link>
        </PageLink>
        {isAuthanticated ? (
          <>
            <PageLink>
              <Link to="profile">{userData.username}</Link>
            </PageLink>
            <PageLink>
              <Link to="cart" className="items-center flex justify-center">
                <FaShoppingCart className="text-xl" />
                <p
                  style={{ minWidth: '20px' }}
                  className=" bg-red-600  text-center rounded-full text-xs"
                  id="lblCartCount"
                >
                  {ex == -1 ? 0 : st}
                </p>
              </Link>
            </PageLink>
          </>
        ) : (
          <>
            <PageLink className=" relative flex justify-center bg-gray-900 shadow-sm shadow-gray-900 rounded-md2 items-center p-0">
              <button
                className="p-2"
                onClick={() => {
                  setMenu((current) => !current);
                }}
              >
                <AiOutlineMenu className="max-sm:visible text-base sm:hidden z-10 focus:bg-red-700" />
              </button>
              <ul
                className={` rounded-md shadow-sm max-sm:bg-slate-800 max-sm:shadow-slate-800 border border-slate-900 max-sm:absolute top-10 flex  items-center max-sm:w-28 p-2 sm:flex max-sm:flex-col lg:flex-row ${
                  menu ? 'hidden' : 'right-0 block'
                }`}
              >
                <PageLink>
                  <Link to="sign-in">Sign In</Link>
                </PageLink>
                <PageLink>
                  <Link to="sign-up">Sign Up</Link>
                </PageLink>
              </ul>
            </PageLink>
          </>
        )}
        <PageLink>
          <ul>
            <PageLink></PageLink>
          </ul>
        </PageLink>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
