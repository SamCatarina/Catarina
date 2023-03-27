import React from 'react'
import {Main, Content, AllSkills, Skill, Bar} from './Skills.style'

function Skills() {
  return (
    <Main>
        <Content>
            <p>Algumas das minhas habilidades incluem: </p>
            <AllSkills>
                <Skill>
                    <h4>Javascript</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="medium"></div>
                        </div>
                        
                    </Bar>
                </Skill>
                <Skill>
                    <h4>HTML</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="large"></div>
                        </div>
                        
                    </Bar>
                </Skill><Skill>
                    <h4>CSS</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="large"></div>
                        </div>
                        
                    </Bar>
                </Skill><Skill>
                    <h4>React</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="medium"></div>
                        </div>
                        
                    </Bar>
                </Skill><Skill>
                    <h4>Bootstrap</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="medium"></div>
                        </div>
                        
                    </Bar>
                </Skill><Skill>
                    <h4>Python</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="small"></div>
                        </div>
                        
                    </Bar>
                </Skill><Skill>
                    <h4>Node</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="medium"></div>
                        </div>
                        
                    </Bar>
                </Skill><Skill>
                    <h4>Git</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="small"></div>
                        </div>
                        
                    </Bar>
                </Skill><Skill>
                    <h4>UI/UX</h4>
                    <Bar>
                        <div className="backBar">
                        <div className="medium"></div>
                        </div>
                        
                    </Bar>
                </Skill>
            </AllSkills>
        </Content>
    </Main>
  )
}

export default Skills