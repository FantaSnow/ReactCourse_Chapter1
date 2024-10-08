import React from 'react';
import ContactContainer from './components/ContactContainer';
import PageTitle from './components/PageTitle';
import './App.css';

function App() {
  return (
    <div>
      <PageTitle title="Address Book" />
      <ContactContainer />
    </div>
  );
}

export default App;
