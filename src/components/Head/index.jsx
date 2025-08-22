import React from 'react'
import styled from 'styled-components'
import perfil from '../../../public/img/perfil.jpg'

const HeadContainer = styled.section`
    background-color: var(--branco);
    display: flex;
    align-items: center;
    font-family: var(--font-principal);
    padding: 10px;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    

    img {
        width: 40px;
        height: 40px;
        margin-left: 10px;
    }

    h2 {
         margin: 15px 5px;
         font-size: 12px;
    }

    a {
        margin: 10px 10px;
        font-size: 10px;
        font-weight: 700;
        color: var(--preto);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    a:hover {
        color: var(--cor-botao);
    }

    @media (min-width: 768px) {
    padding: 20px 40px;
    justify-content: flex-start;

    img {
      width: 60px;
      height: 60px;
    }

    h2 {
      font-size: 18px;
      margin-right: 30px;
    }

    a {
      font-size: 14px;
      margin-right: 25px;
    }
  }
`;

export default function Head() {
  return (
    <HeadContainer>
      <img src={perfil} />
      <h2>FERNANDO</h2>
      <a href="#sobre">SOBRE</a>
      <a href="#projetos">PROJETOS</a>
      <a href="#contato">CONTATO</a>
    </HeadContainer>
  )
}
