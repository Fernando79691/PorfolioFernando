import React from 'react'
import styled from 'styled-components'

const PerfilContainer = styled.div`
    font-family: var(--font-principal);

`;

const Cabecalho = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    padding: 2rem;
    text-align: center;
    margin-top: -200px;
    margin-left: 12px;

    h3 {
        position: relative;
        display: inline-block;
        padding-top: 20px;
        font-size: 40px;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    h3::before {
        content: "";
        display: block;
        width: 50px;
        height: 3px;
        background-color: var(--cor-botao);
        margin: 0 auto 10px auto;

    }

    p {
        font-size: 15px;
        margin-bottom: 2rem;
        max-width: 600px;
        font-weight: 300;
    }
`;

const Conteudo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -100px;

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
        margin-top: 20px;
    }
`;

const Desenvolvimento = styled.div`
    margin-left: 100px;

    h3 {
        font-size: 25px;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    p {
        font-size: 15px;
        margin-bottom: 1px;

        @media (max-width: 768px) {
            font-size: 14px;
            margin-left: 40px;
        }
    }

    button {
        padding: 10px 20px;
        height: 50px;
        width: 150px;
        font-size: 1rem;
        background-color: #7c44ec;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 100;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        margin-left: 0; /* Remove recuo no mobile */
        text-align: center;
    }
`;

const Cards = styled.div`
    margin-right: 400px;
    margin-left: -50px;
    
    h3 {
        font-size: 25px;
        margin-bottom: 10px;

        @media (max-width: 768px) {
            margin-left: 10px;
        }
    }

    .skills-list {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-rows: min-content;
    }

    .skills-list p {
        margin: 8px;
        border: 2px solid #ccc; 
        border-radius: 10px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .skills-list p:nth-child(n+6) {
        grid-column: 2;
    }

    @media (max-width: 768px) {
        margin: 20px 0 0 0; /* Espaçamento no mobile */
        margin-right: 0;
        margin-left: 0;
        .skills-list {
            grid-template-columns: 1fr; /* Uma coluna no mobile */
        }
    }
`;


export default function Perfil() {
    return (
        <PerfilContainer id="sobre">
            <Cabecalho>
                <h3>SOBRE MIM</h3>
                <p>
                    Aqui você encontrará mais informações, o que estou fazendo, minhas habilidades atuais.
                </p>
            </Cabecalho>

            <Conteudo>
                <Desenvolvimento>
                    <h3>Conheça</h3>
                    <p>Transição de carreira para Tecnologia | Desenvolvimento Web.</p><br />
                    <p>Atualmente focado em Desenvolvimento Front-End com ênfase <br />em JavaScript, React, HTML, CSS e lógica de programação.</p><br />
                    <p>Mantenho uma rotina de estudos, prática com projetos próprios e <br />atualização constante sobre as tendências da área.</p><br />
                    <p>Confira alguns dos meus trabalhos na seção Projetos.</p><br />
                    <p>Sinta-se à vontade para se conectar e falar comigo<br /> ou me seguir no meu Linkedin e Instagram,
                        onde publico conteúdo útil<br /> relacionado a Desenvolvimento Web e Programação.</p>
                    <a href="#contato">
                        <button>CONTATO</button>
                    </a>
                </Desenvolvimento>

                <Cards>
                    <h3>Skills</h3>
                    <div className='skills-list'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>GIT</p>
                        <p>Github</p>
                        <p>Mobile First</p>
                    </div>
                </Cards>
            </Conteudo>
        </PerfilContainer>
    );
}
