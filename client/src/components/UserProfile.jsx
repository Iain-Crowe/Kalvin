import React from 'react'
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
      <div className="float-right h-8 text-black bg-main w-30 rounded z-100">
          <Link className='px-4 py-2'>Sign In</Link>
      </div>
  );
}

export default UserProfile