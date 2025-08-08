import React from 'react'
import styled from 'styled-components'

const PerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--cor-backgrount);
    font-family: var(--font-principal);

`;

const Cabecalho = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

const Conteudo = styled.div`
    display: flex;
    align-items: flex-start;
    margin-right: 150px;
    
    h3 {
        text-align: center;
    
    }

    p {
        text-align: center;

    }

    button {
        padding: 10px 20px;
        height: 60px;
        width: 150px;
        font-size: 1rem;
        background-color: #7c44ec;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 100;
        margin-left: 200px;
    }


    /* Responsivo para telas pequenas */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const Desenvolvimento = styled.div`
    flex: 2;
    text-align: left;
`;

const Cards = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: right;

    /* Centralizar no mobile */
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export default function Perfil() {
    return (
        <PerfilContainer>
            <Cabecalho>
                <h3>Sobre mim</h3>
                <p>
                    Aqui você encontrará mais informações, o que estou fazendo, minhas habilidades atuais.
                </p>
            </Cabecalho>

            <Conteudo>
                <Desenvolvimento>
                    <h3>Conheça</h3>
                    <p>
                        Transição de carreira para Tecnologia | Desenvolvimento Web.<br />
                        Atualmente focado em Desenvolvimento Front-End com ênfase <br />em JavaScript, React, HTML, CSS e lógica de programação.<br />
                        Mantenho uma rotina de estudos, prática com projetos próprios e <br />atualização constante sobre as tendências da área.<br />
                        Confira alguns dos meus trabalhos na seção Projetos.<br />
                        Sinta-se à vontade para se conectar e falar comigo<br /> ou me seguir no meu Linkedin e Instagram,
                        onde publico conteúdo útil<br /> relacionado a Desenvolvimento Web e Programação.
                    </p>
                    <button>Contato</button>
                </Desenvolvimento>

                <Cards>
                    <h3>Skills</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>ReactJS</p>
                    <p>GIT</p>
                    <p>Github</p>
                    <p>Mobile First</p>
                </Cards>
            </Conteudo>
        </PerfilContainer>
    );
}
