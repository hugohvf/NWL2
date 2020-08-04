import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

function TeacherItem() {
    return (
        <article className="teacher-item">
          <header>
            <img
              src="https://pbs.twimg.com/media/ESn1wVBXYAATqXG.jpg"
              alt="Chupa cu"
            />
            <div>
              <strong>Chupa Cu</strong>
              <span>Traquinagem</span>
            </div>
            </header>

            <p>
              O Brasil já teve sua cota de aparições polêmicas que aterrorizaram
              a população: o Chupa-Cabra, o ET de Varginha, o governo Temer…
              <br />
              <br />É o Chupa-cu, um híbrido entre ser humano, extra-terrestre e
              ator pornô gay. Ele entra nas casas pelos telhados e ataca vítimas
              que dormem sem roupa.
            </p>
            
            <footer>
                <p>
                    Preço/hora
                    <strong>Não tem preço</strong>
                </p>
                <button type='button'>
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;