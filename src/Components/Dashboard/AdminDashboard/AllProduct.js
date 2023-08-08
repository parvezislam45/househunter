import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import ReactPaginate from "react-paginate";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;
  useEffect(() => {
    fetch(`http://localhost:8000/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => <ProductDetails key={product._id} product={product} />);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <h1>all orders {products.length}</h1>
      <table className="table w-full">
        {/* Render table headers */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Bedroom</th>
            <th>Bathroom</th>
            <th>Size</th>
            <th>Rent</th>
            <th>Action</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{displayProducts}</tbody>
      </table>
     
      <ReactPaginate className="flex justify-center items-center gap-8 text-md bg-black text-white"
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="pagination"
        activeClassName="active"
      />
      {/* <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Bedroom</th>
              <th>Bathroom</th>
              <th>Rent</th>
              <th>Action</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails
                key={product._id}
                product={product}
              ></ProductDetails>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default AllProduct;
