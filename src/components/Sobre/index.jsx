import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook } from "react-icons/fa";
import styled from "styled-components";

const SobreContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

const BarraSocial = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);

  a {
    font-size: 24px;
    color: #000;
    transition: color 0.3s;

    &:hover {
      color: #7c44ec; /* cor personalizada ao passar o mouse */
    }
  }
`;


export default function Sobre() {
    return (
        <>
            <SobreContainer>
                <BarraSocial>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://seulink.com/livro" target="_blank" rel="noopener noreferrer">
                        <FaBook />
                    </a>
                </BarraSocial>

                <h1>Sobre mim</h1>
                <h3>Desenvolvedor em transição de carreira</h3>
                <button>Saiba mais</button>
            </SobreContainer>
        </>
    )
}
