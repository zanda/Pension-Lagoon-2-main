import * as React from 'react';
const Footer = () => {
  return (
    <div id="footer" className="text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 mb-4 ">
            <h5 className="text-uppercase">Avis Clients</h5>

            <div
              className="div "
              style={{ height: '150px', overflowY: 'scroll' }}
            >
              <div>
                Petit aperçu de la culture polynésienne avec le village et le
                traditionnel "four Tahitien". Le repas est excellent ainsi que
                le spectacle.
                <br /> Visité en juin 2021
              </div>
              <hr />
              <div>
                Des animations sont prévus pour faire passer le temps entre les
                plats. Enfin le spectacle, où la rien à dire, il faut vraiment
                le voir!!! En résumé, le spectacle est vraiment à faire!!!!
                <br />
                Visité en juillet 2020
              </div>
              <hr />
              <div>
                Des animations sont prévus pour faire passer le temps entre les
                plats. Enfin le spectacle, où la rien à dire, il faut vraiment
                le voir!!! En résumé, le spectacle est vraiment à faire!!!!
                <br />
                Visité en juillet 2022
              </div>
            </div>
          </div>

          <div className="col-lg-6  mb-4">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Plan du Site
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Nous Contacter
                </a>
              </li>

              <li>
                <a href="#!" className="text-white">
                  Abonnez vous à notre newsletter
                </a>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2 mt-4">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Adresse mail
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Adresse mail"
                  />
                  <button className="btn btn-info" type="button">
                    Souscrire
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3"></div>
        </div>
      </div>

      <div className="text-center p-3  ">
        © 2022 Copyright: Cet hôtel est la propriété de Lex Company
        <br />
        <a className="text-white" href="/">
          Lagoon Lodge est la propriété de Lex Tau
        </a>
      </div>
    </div>
  );
};
export default Footer;
