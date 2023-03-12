import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../reducers/hooks';
import PageLink from './component/pagelink/index';
import Search from './component/search/index';
import './navbar.css';

const Navbar = () => {
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
    <nav>
      <ul>
        <Search />
        <li>
          <Link to="/">Home</Link>
        </li>

        {isAuthanticated ? (
          <>
            <PageLink>
              <Link to="profile">{userData.username}</Link>
            </PageLink>
            <PageLink>
              <Link to="cart" className="">
                <FaShoppingCart fontSize={'24px'} />
                <span className="badge badge-warning" id="lblCartCount">
                  {ex == -1 ? 0 : st}
                </span>
              </Link>
            </PageLink>
          </>
        ) : (
          <>
            <PageLink>
              <Link to="sign-in">Sign In</Link>
            </PageLink>
            <PageLink>
              <Link to="sign-up">Sign Up</Link>
            </PageLink>
          </>
        )}
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
