import React from 'react'
import styled from 'styled-components'

const PerfilContainer = styled.div`

`;

const Cards = styled.div`

`;

export default function Perfil() {
    return (
        <>
            <PerfilContainer>
                <div>
                    <h3>Sobre mim</h3>
                    <p>Aqui você encontrará mais informações, o que estou fazendo, minhas habilidades atuais. </p>
                </div>
                <div>
                    <p>
                        Transição de carreira para Tecnologia | Desenvolvimento Web
                        Atualmente focado em Desenvolvimento Front-End com ênfase em JavaScript, React, HTML, CSS e lógica de programação. Mantenho uma rotina de estudos, prática com projetos próprios e atualização constante sobre as tendências da área.
                        Confira alguns dos meus trabalhos na seção Projetos.
                        Sinta-se à vontade para se conectar e falar comigo ou me seguir no meu Linkedin e Instagram, onde publico conteúdo útil relacionado a Desenvolvimento Web e Programação.
                    </p>
                    <button>Contato</button>
                </div>
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
            </PerfilContainer>
        </>
    )
}
