import React from 'react'
import Head from '../../components/Head'
import Sobre from '../../components/Sobre'
import Perfil from '../../components/Perfil'
import Projetos from '../../components/Projetos'
import Contato from '../../components/Contato'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <>
            <Head />
            <Sobre />
            <Perfil />
            <Projetos />
            <Contato />
            <Footer />
        </>)
}
