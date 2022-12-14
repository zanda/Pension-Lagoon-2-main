import * as React from 'react';
import Para from '../Parallax';
import  Parallax  from '../Parallax';
import SliderAuto from '../SliderAuto';
const BoxActivities = () => (
  <div className="row  justify-content-start">
    <div className="col-12">
      <div className="d-flex ">
        <div className="text-light px-3 bg-info text-center overflow-auto">
          {/* Activités */}
          <div className="py-4">
            <h2 className="display-6">Activités</h2>
            <p className="lead">Sublimez Votre Expérience.</p>
          </div>
          <div
            className="bg-light"
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '21px 21px 0 0 ',
            }}
          > 
          <Para/>
          </div>
          <div className=" col-12 d-md-flex ">
            <div
              className=" pt-md-5  text-center overflow-auto"
              style={{
                //background: 'rgb(7,108,215)',
                background:
                  'linear-gradient(90deg, rgba(7,108,215,1) 0%, rgba(7,155,215,1) 36%, rgba(7,162,215,1) 65%, rgba(7,64,215,1) 100%)',
              }}
            >
              <div className="px-3">
                <h2 className="display-5">Nautiques</h2>
                <p className="lead">
                  Entouré par les eaux cristallines de l'océan Pacifique Sud,
                  l'InterContinental Tahiti Resort & Spa propose une mutitude de
                  sports nautiques. Offrez-vous une excursion guidée de plongée
                  en apnée ou une sortie en voilier, partez à l'aventure pour
                  surfer les vagues de Tahiti ou faites le plein de sensations
                  aquatiques en paddle, kayak ou en jet ski.{' '}
                </p>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '21px 21px 0 0 ',
                }}
              >
                <SliderAuto collection="LocationMarine" />
              </div>
            </div>
            <div
              className=" pt-md-5 overflow-auto"
              style={{
                //background: 'rgb(17,86,4)',
                background:
                  'linear-gradient(90deg, rgba(17,86,4,1) 0%, rgba(77,209,48,1) 41%, rgba(68,188,38,1) 67%, rgba(21,68,8,1) 100%)',
              }}
            >
              <div className="  px-3 ">
                <h2 className="display-5 text-center">Terrestres</h2>
                <p className="lead">
                  {' '}
                  Tahiti est une île regorgeant de trésors cachés, de ses
                  vallées verdoyantes à ses lagons scintillants. Pour découvrir
                  l'île sous tous ses aspects, nous proposons des excursions
                  tous terrains, pour tous les niveaux de forme physique. Faites
                  le tour de l'île accompagné d'un guide, explorez Tahiti en
                  4x4, partez à l'aventure hors des sentiers battus ou en
                  promenade sur les chemins balisés à travers la jungle.
                </p>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '400px',
                }}
              >
                <SliderAuto collection="Location" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default BoxActivities;
