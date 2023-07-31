"use client"
import React, { useState } from 'react';


const Addproduct = () => {
  "use client"
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [colors, setColors] = useState('');
  const [image, setImage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const data = {
        name,
        description,
        colors,
        image,
      };

     
      const response = await axios.post('http://localhost:3000/api/create', data);
      console.log('Response:', response.data);

     
      setName('');
      setDescription('');
      setColors('');
      setImage('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mt-20 mx-auto w-56">
      <h2 className="text-2xl font-bold text-center">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="colors" className="block text-sm font-medium text-gray-700">
            Colors:
          </label>
          <input
            type="text"
            id="colors"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image:
          </label>
          <input
            type="file"
            id="image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addproduct;
