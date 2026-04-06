import Price from './Price';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        {/* Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card-image"
        />
      </div>
      {/* Details */}
      <div className="product-card-details">
        <h2 className="product-card-title">{product.name}</h2>
        <p className="product-card-description">{product.description}</p>
        {/* Footer */}
        <div className="product-card-footer">
          <div className="product-card-price">
            <Price currency="$" price={product.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
