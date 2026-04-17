import PageHeading from './PageHeading';
import ProductListings from './ProductListings';
import { useEffect, useState } from 'react';
import apiClient from '../api/apiClient';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await apiClient.get('/products');
    setProducts(response.data);
  };

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
