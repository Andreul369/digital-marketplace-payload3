import React from 'react';

const ProductPage = ({ params }: { params: { id: string } }) => {
  const userId = params.id;

  console.log(userId);

  return <div>ProductPage</div>;
};

export default ProductPage;
