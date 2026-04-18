import PageHeading from './PageHeading';
import ProductListings from './ProductListings';
import apiClient from '../api/apiClient';
import { useLoaderData } from 'react-router';

export const loader = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (err) {
    throw new Response(
      err.message || 'Failed to fetch products. Please try again.',
      { status: err.status || 500 },
    );
  }
};

const Home = () => {
  const products = useLoaderData();

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
