import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-lg-6 bg-info">
            <h2></h2>
          </div>
          <div className="col-lg-6 bg-dark text-light text-center">
            <h2>Nous Contacter</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
