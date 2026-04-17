import PageHeading from './PageHeading';
import ProductListings from './ProductListings';
import { useEffect, useState } from 'react';
import apiClient from '../api/apiClient';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.get('/products');
      setProducts(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to fetch products. Try again...',
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold text-primary dark:text-light">
          Loading products...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-700 dark:text-red-500">
          Error: {error}
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Welcome">
        Here are all of our furry friends...
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
};

export default Home;
