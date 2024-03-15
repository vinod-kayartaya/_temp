import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneCustomer } from '../redux/actions/customers-action-creators';

const CustomerDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const customerId = queryParams.get('customerId');
  const dispatch = useDispatch();
  const { selectedCustomer } = useSelector((store) => store.customerReducer);

  useEffect(() => {
    fetchOneCustomer(customerId).then(dispatch);
  }, [customerId]);

  return (
    <>
      <h3>
        {selectedCustomer.gender === 'Male' ? 'Mr.' : 'Ms.'}{' '}
        {selectedCustomer.firstname} {selectedCustomer.lastname}
      </h3>
      <hr />

      <div className='row'>
        <div className='col-4'>
          <img src={selectedCustomer.avatar} alt={selectedCustomer.firstname} />
        </div>
        <div className='col-8'>
          <table className='table table-hover'>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{selectedCustomer.id}</td>
              </tr>
              <tr>
                <td>Firstname</td>
                <td>{selectedCustomer.firstname}</td>
              </tr>
              <tr>
                <td>Lastname</td>
                <td>{selectedCustomer.lastname}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{selectedCustomer.gender}</td>
              </tr>
              <tr>
                <td>Email address</td>
                <td>{selectedCustomer.email}</td>
              </tr>
              <tr>
                <td>Phone number</td>
                <td>{selectedCustomer.phone}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{selectedCustomer.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
