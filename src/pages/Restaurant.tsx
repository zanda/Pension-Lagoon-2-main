import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BoxRestaurant from '../components/restau/BoxRestaurant';

const Restaurant = () => {
  return (
    <div>
      <Navbar />
      <BoxRestaurant />
      <Footer />
    </div>
  );
};
export default Restaurant;
