import PageHeading from './PageHeading';
import ProductListings from './ProductListings';
import products from '../data/products';

const Home = () => {
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
