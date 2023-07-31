"use client"   



import React, { useState, useContext } from "react";
import Link from "next/link";
import CartContext from "../../../context/CartContext/page";

const ListProducts = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    addItemToCart({
      product: product.id,
      name: product.name,
      description: product.description,
      colors: product.colors,
      image: product.image,
      price: product.price,
    });
  };

  return (
    <>
      <section className="py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <main className="md:w-2/3 lg:w-3/4 px-3">
              {products.map((product, key) => (
                <article
                  key={key}
                  className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 flex p-3">
                      <div
                        style={{
                          width: "80%",
                          height: "70%",
                          position: "relative",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          height="240"
                          width="240"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/4">
                      <div className="p-4">

                        <Link href={`/product/${product.id}`}>
                          <h1 className="hover:text-blue-600 cursor-pointer">
                            {product.name}
                          </h1>
                        </Link>
                        <p className="text-gray-500 mb-2">
                          {product.description}
                        </p>
                        <p className="text-gray-500 mb-2">
                          Colors: {product.colors}
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                      <div className="p-5">
                        <span className="text-xl font-semibold text-black">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                    <div className="my-3">
                      <button
                        className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                        onClick={() => handleAddToCart(product)} 
                      >
                        Add to Cart
                      </button>

                    </div>
                  </div>
                </article>
              ))}
            </main>
          </div>
        </div>
      </section>
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </>
  );
};

export default ListProducts;







