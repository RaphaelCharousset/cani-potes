/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import NavBarDisconnected from '../Header/NavBarDisconnected/NavBarDisconnected';

import ConnectionHeader from './ConnectionHeader';
import ConnectionModal from './ConnectionModal';

import dogHome from '../../assets/img/home-dogs.jpg';
import mapHome from '../../assets/img/home_map.png';
import paw from '../../assets/img/paw-linear.svg';

import './Connection.scss';

const Connection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="connection-container">
      <ConnectionHeader setIsModalOpen={setIsModalOpen} />

      <main className="connection">
        <div className="connection__info">
          <article>
            <div className="connection__info__title">
              <h1>
                <strong>Cani' Potes</strong>
                <br />
                <span>Pour des rencontres au poil !</span>
              </h1>
              <div>
                <img src={dogHome} alt="dogs" />
              </div>
            </div>
            <div className="connection__info__text">
              <p>
                <span>
                  Partez à la rencontre de nombreux "propriétaires" de chiens - Cani'Potes -
                  pour que vos toutous se sociabilisent en toute sécurité avec d'autres amis poilus.
                </span>
              </p>
            </div>
          </article>

          <article>
            <div className="connection__info__map">
              <h2>
                Ne promenez plus votre chien seul(e),
                rejoignez des Cani'Potes !
              </h2>
              <div className="connection__info__map-row-reverse">
                <div>
                  <img src={mapHome} alt="map example" />
                </div>
                <p>
                  Via la carte interactive, visualisez les balades autour de chez vous et rejoignez-les.
                  <br />
                  La promenade de vos rêves n'existe pas ? Créez la vôtre pour la proposer aux autres Cani'Potes.
                </p>
              </div>
            </div>
          </article>

          <div className="connection__info__text connection__info__text-center">
            <div>
              <h2>Commencez l'aventure simplement</h2>
              <ol>
                <div><img src={paw} alt="paw" /><img src={paw} alt="paw" /><img src={paw} alt="paw" /></div>
                <li>
                  Je me crée un compte en cliquant sur "Inscription".
                </li>
                <div><img src={paw} alt="paw" /><img src={paw} alt="paw" /><img src={paw} alt="paw" /></div>
                <li>
                  Je renseigne mes informations et celles de mon / mes chiens.
                </li>
                <div><img src={paw} alt="paw" /><img src={paw} alt="paw" /><img src={paw} alt="paw" /></div>
                <li>
                  Et c'est parti pour de belles rencontres !
                </li>
              </ol>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <ConnectionModal setIsModalOpen={setIsModalOpen} />
        )}
      </main>

      <footer className="connection__footer">
        <NavBarDisconnected />
      </footer>
    </div>
  );
};

export default Connection;
