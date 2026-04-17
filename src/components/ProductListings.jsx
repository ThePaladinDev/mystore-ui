import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';

const sortOptions = ['Popularity', 'Price Low to High', 'Price High to Low'];

const ProductListings = ({ products }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('Popularity');

  const filteredAndSortedProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase()),
    );

    return filteredProducts.slice().sort((a, b) => {
      switch (selectedSortOption) {
        case 'Price Low to High':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'Price High to Low':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'Popularity':
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });
  }, [products, searchText, selectedSortOption]);

  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
  }

  function handleSortChange(sortType) {
    setSelectedSortOption(sortType);
  }

  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search products..."
          value={searchText}
          handleSearch={(value) => handleSearchChange(value)}
        />
        <Dropdown
          label="Sort by"
          options={sortOptions}
          value={selectedSortOption}
          handleSort={(value) => handleSortChange(value)}
        />
      </div>
      {/* Display Products */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
          {filteredAndSortedProducts.map((product) => {
            return <ProductCard key={product.productId} product={product} />;
          })}
        </div>
      ) : (
        <div className="gap-y-8 gap-x-6 py-12">
          <p className="text-center font-primary font-bold text-3xl text-primary dark:text-light">
            No dogs found :(
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductListings;
