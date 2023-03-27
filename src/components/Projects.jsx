import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Main, Project } from './Projects.style'

function Projects() {
    return (
        <Main>
            <p>Meus projetos</p>
            <Carousel>
                <Carousel.Item>
                    <Project>
                    
                    </Project>
                </Carousel.Item>
                
            </Carousel>
        </Main>
    )
}

export default Projects