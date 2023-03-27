import React from 'react'
import { Container, AboutMe, Apresentation, ContactLinks, Glass, Header, Image, Logo, MainContent, SecApr, Text, TextApr, Title, Buttons, Content } from './Main.style'
import About from './About.jsx'
import Skills from './Skills'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

import image from '../assets/coffe.svg'
import logo from '../assets/logo.svg'
import Projects from './Projects'

function Main() {
  const [cont, useCont] = useState("About")

  return (
    <Container>
      <Glass>
        <Header>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
        </Header>
        <div className="hzLine">

        </div>
        <MainContent>
          <Apresentation>
            <TextApr>
              <Title>
                <h3>Olá, meu nome é Catarina!</h3>
              </Title>
              <Text>
                <p>Bem-vindo ao meu portifólio! Sou desenvolvedora web e estudante.</p>
              </Text>
            </TextApr>

            <SecApr>
              <Image>
                <img src={image} alt="img" />
              </Image>
              <ContactLinks>
                <a href="mailto:sampaiocatarina@gmail.com"> <FaEnvelope /> Email </a>
                <a href="https://github.com/SamCatarina" target={'_blank'}> <FaGithub /> Github </a>
                <a href="https://www.linkedin.com/in/catarinacsampaio/?locale=en_US" target={'_blank'}> <FaLinkedin /> LinkedIn </a>

              </ContactLinks>

            </SecApr>

          </Apresentation>

          <div className="vertLine"></div>

          <AboutMe>
            <Buttons>
              <button onClick={() => useCont("About")}> Sobre mim </button>
              <button onClick={() => useCont("Skills")}> Habilidades </button>
              <button onClick={() => useCont("Projects")}> Projetos </button>
            </Buttons>
            <Content>
              {(() => {
                if (cont=="About") {
                  return (
                    <About/>
                  )
                } else if (cont=="Skills") {
                  return (
                    <Skills/>
                  )
                } else {
                  return (
                    <Projects/>
                  )
                }
              })()}
            </Content>
          </AboutMe>
        </MainContent>

      </Glass>
    </Container>
  )
}

export default Main