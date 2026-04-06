import PageHeading from './PageHeading';
import ProductListings from './ProductListings';
import products from '../data/products';

const Home = () => {
  return (
    <div className="home-container">
      <PageHeading title="Welcome">
        Here are all of our furry friends...
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
};

export default Home;
