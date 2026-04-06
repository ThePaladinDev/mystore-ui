import ProductCard from './ProductCard';

const ProductListings = ({ products }) => {
  return (
    <div className="product-listings-container">
      <div className="product-listings-grid">
        {products.length > 0 ? (
          products.map((product) => {
            return <ProductCard key={product.productId} product={product} />;
          })
        ) : (
          <p className="product-listings-empty">No dogs found :(</p>
        )}
      </div>
    </div>
  );
};

export default ProductListings;
