import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ClientAdd from '../components/gestion/addClient';

const clientList = () => {
  return (
    <div>
      <Navbar />
      <ClientAdd />
      <Footer />
    </div>
  );
};
export default clientList;
