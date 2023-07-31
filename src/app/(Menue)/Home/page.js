import React from 'react';
import Navbar from '../Navbar/page';
import AdminPage from '../../component/AdminPage/page';


const Home = () => {
  return (
    <div className='ml-3'>
     <Navbar/>
    
      <h1 className="text-4xl font-bold text-blue-800">This is Home Page</h1>

      <AdminPage />
    </div>
  );
};

export default Home;