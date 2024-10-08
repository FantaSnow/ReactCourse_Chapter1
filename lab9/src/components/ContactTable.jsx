import React, { useState } from 'react';

const ContactTable = ({ contacts, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

const ContactRow = ({ contact, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({
    firstName: contact.firstName,
    lastName: contact.lastName,
    phone: contact.phone,
  });
  const [error, setError] = useState({});

  const handleEditClick = () => {
    if (isEditing) {
      const validationErrors = {};
      if (editedContact.firstName.trim() === '') {
        validationErrors.firstName = 'First name is required.';
      }
      if (editedContact.lastName.trim() === '') {
        validationErrors.lastName = 'Last name is required.';
      }
      if (editedContact.phone.trim() === '') {
        validationErrors.phone = 'Phone is required.';
      } else if (!/^\d+$/.test(editedContact.phone)) {
        validationErrors.phone = 'Phone must be numeric.';
      }

      if (Object.keys(validationErrors).length > 0) {
        setError(validationErrors);
        return;
      }

      setError({});
      onEdit(contact.id, editedContact);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <tr>
      <td>{contact.id}</td>
      <td>
        {isEditing ? (
          <input
            name="firstName"
            value={editedContact.firstName}
            onChange={handleInputChange}
            style={{ borderColor: error.firstName ? 'red' : 'black' }}
          />
        ) : (
          contact.firstName
        )}
        {error.firstName && (
          <span style={{ color: 'red' }}>{error.firstName}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="lastName"
            value={editedContact.lastName}
            onChange={handleInputChange}
            style={{ borderColor: error.lastName ? 'red' : 'black' }}
          />
        ) : (
          contact.lastName
        )}
        {error.lastName && (
          <span style={{ color: 'red' }}>{error.lastName}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="phone"
            value={editedContact.phone}
            onChange={handleInputChange}
            style={{ borderColor: error.phone ? 'red' : 'black' }}
          />
        ) : (
          contact.phone
        )}
        {error.phone && <span style={{ color: 'red' }}>{error.phone}</span>}
      </td>
      <td>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ContactTable;
