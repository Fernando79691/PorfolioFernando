import React from 'react'
import styled from 'styled-components'
import portfolio from '../../../public/img/portfolio.webp'


const ProjetosContainer = styled.div`
    font-family: var(--font-principal);
    background-color: var(--cor-backgrount);

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

const Imagens = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -100px;

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
        margin-top: 20px;
    }
`;

const Projects = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -100px;

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
        margin-top: 20px;
    }
`;

export default function Projetos() {
    return (
        <>
            <ProjetosContainer>
                <Cabecalho>
                    <h3>PROJETOS</h3>
                    <p>Aqui você pode encontrar alguns dos projetos pessoais e para clientes</p>
                </Cabecalho>

                <Imagens>
                    <img src={portfolio} />
                </Imagens>

                <Projects>
                    <h5>Portfólio Pessoal</h5>
                    <p>Baseado no Dopefolio projeto Open-Source criado por Ram Maheshwari. Utilizando técnicas em HTML, CSS e Javascript.</p>
                    <button>CASE STUDY</button>
                </Projects>

            </ProjetosContainer>
        </>

    )
}
