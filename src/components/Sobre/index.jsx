import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook } from "react-icons/fa";
import styled from "styled-components";

const SobreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 2rem;
  text-align: center;
  margin-top: -80px;
  margin-left: 10px;
  font-family: var(--font-principal);


    h1 {
        font-size: 40px;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 15px;
        margin-bottom: 2rem;
        max-width: 600px;
        font-weight: 300;
    }

    button {
        padding: 10px 20px;
        height: 60px;
        width: 250px;
        font-size: 1rem;
        background-color: #7c44ec;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 100;

        &:hover {
            background-color: #5a2dbf;
        }
    }

    @media (min-width: 768px) {
        h1 {
        font-size: 60px;
        margin-bottom: 1rem;
        }

        h3 {
        font-size: 20px;
        }

        button {
        font-size: 1rem;
        }
    }
`;

const BarraSocial = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: var(--branco);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);

  a {
    font-size: 24px;
    color: #000;
    transition: color 0.3s;
    }

    &:hover {
      color: #7c44ec; 
    }

    @media (max-width: 768px){
        display: none !important; 
        visibility: hidden;       
        width: 0;                 
        height: 0;                 
        padding: 0;               
        margin: 0;     
    }
    
`;


export default function Sobre() {
    return (
        <>
            <BarraSocial>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://seulink.com/livro" target="_blank" rel="noopener noreferrer">
                    <FaBook />
                </a>
            </BarraSocial>

            <SobreContainer>
                <h1>FERNANDO MARTINS</h1>
                <h3>Desenvolvedor web que cria e gerencia sites e aplicativos da web que levam ao sucesso seu produto</h3>
                <button>PROJETOS</button>
            </SobreContainer>
        </>
    )
}
