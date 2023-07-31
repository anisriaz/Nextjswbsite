import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
  return (
    <>
      <Link href="/Addproduct">
        <div className="text-blue-500 hover:text-blue-700 mt-10 text-right mr-20 cursor-pointer">
          <FontAwesomeIcon icon={faUserPlus} className="h-4 w-4 text-left" />
        </div>
      </Link>
    </>
  );
};

export default AdminPage;



