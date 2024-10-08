import React, { useState } from 'react';
import AddContactComponent from './AddContactComponent';
import ContactTable from './ContactTable';
import SearchInput from './SearchInput';

const ContactContainer = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!newContact.firstName) formErrors.firstName = true;
    if (!newContact.lastName) formErrors.lastName = true;
    if (!newContact.phone) {
      formErrors.phone = 'required';
    } else if (!/^\d+$/.test(newContact.phone)) {
      formErrors.phone = 'invalid'; // Додаємо перевірку, чи містить поле тільки цифри
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleInputChange = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const newContactWithId = { id: Date.now(), ...newContact };
    setContacts([...contacts, newContactWithId]);

    setNewContact({ firstName: '', lastName: '', phone: '' });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleEdit = (id, updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedContact } : contact
      )
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  return (
    <div>
      <AddContactComponent
        contact={newContact}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <ContactTable
        contacts={filteredContacts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ContactContainer;
