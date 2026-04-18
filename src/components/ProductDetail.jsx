import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faShoppingBasket,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleViewCart = () => navigate('/cart');

  return (
    <div className="min-h-[852px] flex items-center justify-center px-6 py-8 font-primary bg-normalbg dark:bg-darkbg">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x-8 px-6 p-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg overflow-hidden bg-cover">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 mt-8 md:mt-0">
          <Link
            to="/home"
            className="inline-flex items-center text-primary dark:text-light font-medium hover:text-dark dark:hover:text-lighter"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back To All Products
          </Link>

          <div>
            <h1 className="text-3xl font-extrabold text-primary dark:text-light mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-lighter mb-4">
              {product.description}
            </p>
            <div className="text-2xl font-bold text-primary dark:text-light">
              ${product.price}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {/* Quantity Input */}
            <div className="flex items-center space-x-4">
              <label
                htmlFor="quantity"
                className="text-primary dark:text-light"
              >
                Qty:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-16 px-2 py-1 border rounded-md focus:ring focus:ring-light dark:focus:ring-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* Add to Cart Button */}
            <button className="w-full px-4 py-2 bg-primary dark:bg-light text-white dark:text-black rounded-md text-lg font-semibold hover:bg-dark dark:hover:bg-lighter transition">
              Add to Cart
              <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
            </button>

            {/* View Cart Button */}
            <button
              onClick={handleViewCart}
              className="w-full px-4 py-2 bg-primary dark:bg-light text-white dark:text-black rounded-md text-lg font-semibold hover:bg-dark dark:hover:bg-lighter transition"
            >
              View Cart
              <FontAwesomeIcon icon={faShoppingBasket} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
