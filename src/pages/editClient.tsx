import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ClientEdit from '../components/gestion/editClient';

const clientList = () => {
  return (
    <div>
      <Navbar />
      <ClientEdit />
      <Footer />
    </div>
  );
};
export default clientList;
