import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Para from '../components/Parallax';
import BoxBungalow from '../components/rooms/BoxBungalow';

const Bungalows = () => {
  return (
    <div>
      <Navbar />
      <Para />
      <BoxBungalow />
      <Footer />
    </div>
  );
};
export default Bungalows;
