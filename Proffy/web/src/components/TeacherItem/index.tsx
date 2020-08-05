import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/35694424?s=460&u=484e1ebc087a8de097fdc67da1fcb727b9b10d7e&v=4" alt="Bruno Bortolo"/>
                <div>
                    <strong>Bruno Bortolo</strong>
                    <span>Química</span>
                 </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada
                <br /><br />
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma de minha explosões. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                 </button>
            </footer>
        </article>
    )
}

export default TeacherItem;