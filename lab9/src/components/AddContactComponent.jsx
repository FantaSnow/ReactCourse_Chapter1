import React from 'react';

const AddContactComponent = ({ contact, onInputChange, onSubmit, errors }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="firstName"
          value={contact.firstName}
          onChange={onInputChange}
          placeholder="First Name"
        />
        {errors.firstName && (
          <span style={{ color: 'red' }}>The first name is required</span>
        )}
      </div>
      <div>
        <input
          name="lastName"
          value={contact.lastName}
          onChange={onInputChange}
          placeholder="Last Name"
        />
        {errors.lastName && (
          <span style={{ color: 'red' }}>The last name is required</span>
        )}
      </div>
      <div>
        <input
          name="phone"
          value={contact.phone}
          onChange={onInputChange}
          placeholder="Phone"
        />
        {errors.phone && errors.phone === 'required' && (
          <span style={{ color: 'red' }}>The phone is required</span>
        )}
        {errors.phone && errors.phone === 'invalid' && (
          <span style={{ color: 'red' }}>Phone must contain only digits</span>
        )}
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContactComponent;
