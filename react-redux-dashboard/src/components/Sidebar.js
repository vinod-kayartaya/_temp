import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <h3>Sidebar</h3>
      <ul className='list-group'>
        <Link to='/new-customer' className='list-group-item text-capitalize'>
          New customer
        </Link>
        <Link to='/customer-list' className='list-group-item text-capitalize'>
          Customer list
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
