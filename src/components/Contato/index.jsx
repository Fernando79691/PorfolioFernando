import React, { useState } from 'react'
import styled from 'styled-components'

const ContatoContainer = styled.div`
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

const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 6px;
  background: #f3f3f3;
  font-size: 16px;
  outline: none;

  &:focus {
    background: #e9e9e9;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 6px;
  background: #f3f3f3;
  font-size: 16px;
  outline: none;
  min-height: 120px;
  resize: none;

  &:focus {
    background: #e9e9e9;
  }
`;

const Button = styled.button`
  display: block;
  width: 150px;
  padding: 15px;
  background: var(--cor-botao);
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export default function Contato() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data:", formData)
        alert("Mensagem enviada!")
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <ContatoContainer>
            <Cabecalho>
                <h3>CONTATO</h3>
                <p>
                    Sinta-se à vontade para entrar em contato comigo enviando o formulário
                    abaixo e entrarei em contato com você o mais breve possível.
                </p>
            </Cabecalho>

            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu Nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <Label htmlFor="message">Mensagem</Label>
                    <TextArea
                        id="message"
                        name="message"
                        placeholder="Digite sua Mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <Button type="submit">Enviar</Button>
                </form>
            </FormContainer>
        </ContatoContainer>
    )
};
