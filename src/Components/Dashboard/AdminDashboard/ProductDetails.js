import React from "react";

const ProductDetails = ({ product }) => {
  const { name, Bedroom, bathroom, size, rent } = product;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{Bedroom}</td>
      <td>{bathroom}</td>
      <td>{size}</td>
      <td>{rent}</td>
      <td class="px-6 py-4">
        <a
          href="#/"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
      <td class="px-6 py-4">
        <a
          href="#/"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Delate
        </a>
      </td>
    </tr>
  );
};

export default ProductDetails;
