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

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    margin-top: -100px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        margin-left: 45px;
        gap: 20px;
    }
`;

const Imagens = styled.div`
    height: 280px;
    width: 620px;
    border: 2px solid #ccc;
    margin-right: 150px;
    margin-left: 130px;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        width: 90%;
        height: auto;

        img {
            height: auto;
        }
    }
`;

const Projects = styled.div`
    max-width: 400px;

    h5 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    p {
        font-size: 15px;
        margin-bottom: 15px;
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
        text-align: center;

        h5 {
            font-size: 18px;
        }

        p {
            font-size: 14px;
        }

        button {
            width: 100%;
            max-width: 200px;
        }
    }
`;

export default function Projetos() {
    return (
        <>
            <ProjetosContainer id="projetos">
                <Cabecalho>
                    <h3>PROJETOS</h3>
                    <p>Aqui você pode encontrar alguns dos projetos pessoais e para clientes</p>
                </Cabecalho>

                <Wrapper>
                    <Imagens>
                        <img src={portfolio} />
                    </Imagens>

                    <Projects>
                        <h5>Portfólio Pessoal</h5>
                        <p>Baseado no Dopefolio projeto Open-Source criado por Ram Maheshwari. Utilizando técnicas em HTML, CSS e Javascript.</p>
                        <button>CASE STUDY</button>
                    </Projects>
                </Wrapper>

            </ProjetosContainer>
        </>

    )
}
