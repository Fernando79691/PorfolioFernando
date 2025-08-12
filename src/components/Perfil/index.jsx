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
    
`;

const Desenvolvimento = styled.div`

`;

const Cards = styled.div`

`;

export default function Perfil() {
    return (
        <PerfilContainer>
            <Cabecalho>
                <h3>SOBRE MIM</h3>
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
