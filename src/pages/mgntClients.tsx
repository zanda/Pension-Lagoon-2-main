import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ClientsList from '../components/gestion/clientsList';

const clientList = () => {
  return (
    <div>
      <Navbar />
      <ClientsList />
      <Footer />
    </div>
  );
};
export default clientList;
