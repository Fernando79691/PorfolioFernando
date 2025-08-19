import React from 'react'
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook } from "react-icons/fa";
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color: var(--preto);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;
    gap: 2rem;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Sobre = styled.div`
    color: var(--branco);
    font-family: var(--font-principal);
    margin-right: 150px;

    @media (max-width: 768px) {
        margin-left: 110px;
    }

`;

const Social = styled.div`
    font-family: var(--font-secundaria);

    a {
        margin-right: 15px;
        font-size: 2rem;
        color: var(--branco);
    }

    @media (max-width: 768px) {
        margin-top: 1rem;
    }

`;

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <Sobre>
                    <h5>FERNANDO MARTINS</h5>
                    <p>Desenvolvedor web que cria e gerencia sites e<br /> aplicativos da web que levam ao sucesso seu produto.</p>
                </Sobre>

                <Social>
                    <h5>SOCIAL</h5>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://seulink.com/livro" target="_blank" rel="noopener noreferrer">
                        <FaBook />
                    </a>
                </Social>
            </FooterContainer>
        </>
    )
}