import * as React from 'react';
import SliderAuto from '../SliderAuto';
const BoxEvents = () => (
  <div className="container-fluid">
    <div className="row col-12">
      <div className="card rounded-5  ">
        <img
          src="https://7.holiday/public/user_files/1/1/7_villas.jpg"
          className="card-img"
        />
        <div className="card-img-overlay pt-5">
          <h3 className="card-title text-center fs-3 fw-bold align-content-center">
            {' '}
            Évènements{' '}
          </h3>
          <p className="text-dark lead fs-4 text-center">
            {' '}
            Vivez une expérience inoubliable !
          </p>
        </div>
        {/* 3 Events*/}

        <hr className="featurette-divider" />
        <div className="row featurette ">
          <div className="col-md-6 d-flex flex-column  justify-content-center px-4">
            <h2 className="featurette-heading  fw-normal  text-secondary ">
              <hr className="text-primary" />
              Mariages
              <hr className="text-primary" />
            </h2>

            <p className="lead fs-4">
              Notre équipe vous organise des évènements mémorables,
              <br /> du dîner romantique au mariage tahitien traditionnel.
              <br /> Entre cadeaux, surprises et privilèges, vivez des moments à
              deux exceptionnels et inoubliables.
            </p>
          </div>
          <div className="col-md-6">
            <SliderAuto collection="mariage" />
          </div>
        </div>

        {/* HoneyMoon */}

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className=" d-flex">
            <SliderAuto collection="honeymoon" />
            <div className="col-md-6  d-flex flex-column justify-content-center px-4  ">
              <h2 className=" featurette-heading fw-normal lh-1 text-secondary">
                <hr className="text-primary" />
                Lune de Miel
                <hr className="text-primary" />
              </h2>

              <p className="lead fs-4">
                La Polynésie est l’une des plus belles destinations au monde
                <br />
                pour fêter ce grand moment à deux ! <br />
                Nos offres incluent de nombreux cadeaux et surprises qui vous
                laisseront un souvenir impérissable.
              </p>
            </div>
          </div>

          {/* HB */}

          <hr className="featurette-divider mt-3" />
          <div className="row featurette ">
            <div className="col-md-6  d-flex flex-column justify-content-center px-4">
              <h2 className="featurette-heading fw-normal  text-secondary">
                <hr className="text-primary" />
                Anniversaires
                <hr className="text-primary" />
              </h2>
              <p className="lead fs-4">
                Cette année, mettez le paquet!
                <br />
                Rendez votre fête unique et inoubliable
              </p>
            </div>
            <div className="col-md-6 mb-3 ">
              <SliderAuto collection="anniversaire" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default BoxEvents;
