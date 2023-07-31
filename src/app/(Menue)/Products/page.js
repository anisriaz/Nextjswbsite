import React from 'react';
import ListProducts from "./productList/page";

async function Products() {
  const Post = await getData();
  const ourProds = Post.allPosts;

  return (
    <>
      <ListProducts products={ourProds} />
      
    </>
  );
}

export default Products;

export async function getData() {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  });
  return response.json();
}


