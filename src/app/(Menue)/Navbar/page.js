import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <h1 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Mobiles Shop</span>
        </h1>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/cart">
            <h1 className="mr-12 hover:text-gray-900">
              <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4" />
            </h1>
          </Link>
          <Link href="/">
            <h1 className="mr-5 hover:text-gray-900">Home</h1>
          </Link>
          <Link href="/Products">
            <h1 className="mr-5 hover:text-gray-900">Products</h1>
          </Link>
          <Link href="/aboutus">
            <h1 className="mr-5 hover:text-gray-900">About us</h1>
          </Link>
          <Link href="/contactus">
            <h1 className="mr-12 hover:text-gray-900">Contact us</h1>
          </Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
