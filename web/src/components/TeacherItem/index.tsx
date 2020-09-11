import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/55966332?s=460&u=6e0993fb0daca62b5d53967137e6af4668fd28c9&v=4" alt="Luciano Silva"/>
                <div>
                    <strong>Luciano Silva</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Fanático das melhores tecnologias de Programação Full Stack.
                <br/><br/>
                Viciado em criar aplicações que geram impacto na vida 
                das pessoas. Nas áreas de software, Òleo e Gás, Saúde, 
                Agronegócio, entre outros.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button"> 
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;