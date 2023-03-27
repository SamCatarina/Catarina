import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;

`
export const AllSkills = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

`
export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    height: 32px;
    @media screen and (max-width:760px){
        height: 50px;
    }
    
    & h4{
        font-size: 14px;
    }


`
export const Bar = styled.div`
    & .backBar{
        margin-top: 5px;
        width: 60px;
        height: 9px;
        background-color: #573996;
        border-radius: 50px;
    }
    & .medium{
        width: 30px;
        height: 9px;
        background-color: #E162AE;
        border-radius: 50px;
    }
    & .small{
        width: 15px;
        height: 9px;
        background-color: #E162AE;
        border-radius: 50px;
    }
    & .large{
        width: 55px;
        height: 9px;
        background-color: #E162AE;
        border-radius: 50px;
    }
`