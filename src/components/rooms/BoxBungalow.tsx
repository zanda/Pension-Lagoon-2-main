import * as React from 'react';
import SliderAuto from '../SliderAuto';

const BoxBungalow = () => (
  <div className="container-fluid ">
    <div className="row">
      <div className="container py-4">
        <div className="p-5 mb-4 bg-info rounded-5">
          <div className="container-fluid">
            <h2 className="display-6 fw-bold ">Bungalows</h2>
            <p className="col-md-12 fs-4 text-white">
              Les Bungalows Pilotis bénéficient d’une grande terrasse solarium
              privée et d’un accès direct au lagon.
            </p>
            <SliderAuto collection="layout-bungalows" />
            <p className="float-end">Garde Animaux : 2500 fr/Jour</p>

            <p className="fs-4 mt-4 text-white"></p>

            <button
              className="btn btn-lg rounded-3 btn-outline-light mt-4"
              type="button"
            >
              Réserver
            </button>
          </div>
        </div>

        <div className="p-5 mb-4 bg-light rounded-5">
          <div className="container-fluid">
            <h2 className="display-6 fw-bold">Chambres</h2>
            <p className=" col-md-12 fs-4 text-info">
              Quelles que soient leur catégorie et leur situation, toutes nos
              chambres vous offrira un concentré de confort.
            </p>
            <SliderAuto collection="Chambres" />
            <p className="float-end">Garde Animaux : 2500 fr/Jour</p>

            <button
              className="btn btn-info btn-lg rounded-3 btn-outline-light mt-4"
              type="button"
            >
              Réserver
            </button>
          </div>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3 text-center">
            <img
              style={{ height: '450px' }}
              className="img-fluid w-100"
              src="https://www.yestahiti.fr/_client_files/infos_voyageurs/chaud-froid.jpg"
            />
            <h2 className="mt-4 mb-4">Chaud-Froid</h2>
            <p className="fs-5">Tataki au thon rouge.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark border rounded-3 text-center">
            <img
              style={{ height: '450px' }}
              className="img-fluid w-100"
              src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/feet5t.jpg"
            />
            <h2 className="mt-4 mb-4">Crudités</h2>
            <p className="fs-5">Poisson cru au lait de coco.</p>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-4 mb-4 bg-whitesmoke rounded-3">
        <div className="row   row-cols-lg-3 space-between text-center">
          <div className="card  shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal"> Petit Déjeuner</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                1000 fr<small className="text-muted fw-light">/Jour</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Prix/pers</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-info btn-lg rounded-3 btn-outline-light"
              >
                Réserver une table
              </button>
            </div>
          </div>
          <div className="card  shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal"> Demi-Pension</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                2500 fr<small className="text-muted fw-light">/Jour</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Prix/pers</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-info btn-lg rounded-3 btn-outline-light"
              >
                Réserver une table
              </button>
            </div>
          </div>
          <div className="card  shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal"> Pension Complète</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                4000 fr<small className="text-muted fw-light">/Jour</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Prix/pers</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-info btn-lg rounded-3 btn-outline-light"
              >
                Réserver une table
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">&copy; 2022</footer>
      </div>
    </div>
  </div>
);
export default BoxBungalow;
