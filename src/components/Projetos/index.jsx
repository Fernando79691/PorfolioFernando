import React from 'react'
import styled from 'styled-components'

const ProjetosContainer = styled.div`

`;

const Cabecalho = styled.div`

`;

const Projects = styled.div`

`;

export default function Projetos() {
    return (
        <>
            <ProjetosContainer>
                <Cabecalho>
                    <h3>Projetos</h3>
                    <p>Aqui você pode encontrar alguns dos projetos pessoais e para clientes</p>
                </Cabecalho>

                <Projects>
                    <img></img>
                    <h5>Portfólio Pessoal</h5>
                    <p>Baseado no Dopefolio projeto Open-Source criado por Ram Maheshwari. Utilizando técnicas em HTML, CSS e Javascript.</p>
                    <button></button>
                </Projects>

            </ProjetosContainer>
        </>

    )
}
