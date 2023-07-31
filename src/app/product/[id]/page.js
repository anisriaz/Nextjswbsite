// "use client"


// import React, { useEffect, useState } from 'react';
// import getProductDetails from '../../(Menue)/Products/productDetails/page';

// const ProductDetailsPage = ({ id }) => {
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchProduct = async () => {
//         try {
//           const productData = await getProductDetails(id);
//           setProduct(productData);
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching product details:', error);
//           setLoading(false);
//         }
//       };
  
//       fetchProduct();
//     }, [id]);
  
//     if (loading) {
//       return <p>Loading...</p>;
//     }
  
//     if (!product) {
//       return <p>Product not found or error fetching data.</p>;
//     }
  
//     // Render the product details here
//     return (
//       <div>
//         <h1>{product.name}</h1>
//         <p>{product.description}</p>
//         {/* ... */}
//       </div>
//     );
//   };
  
//   // This is important for dynamic routing
//   export async function getServerSideProps({ params }) {
//     return {
//       props: {
//         id: params.id,
//       },
//     };
//   }
  
//   export default ProductDetailsPage;


