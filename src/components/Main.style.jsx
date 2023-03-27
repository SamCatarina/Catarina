import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 760px){
        height: 990px;
    }
    
`

export const Glass = styled.div`
    width: 75%;
    height: 85%;
    max-width: 1142px;
    
    border-radius: 50px;
    display: flex;
    flex-direction: column;
  background: rgba(255, 252, 252, 0.12);
backdrop-filter: blur(13.5px);
border: 1px solid #ffffff65;

    & .hzLine{
        width: 100%;
        height: 1px;
        background-color: #ffffff65;
    }
    @media screen and (max-width:760px){
        height: 95%;

        
    }
`
export const Header = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:760px){
        height: 5%;
    }
`
export const Logo = styled.div`
    & img{
        width: 120px;
    }
`

export const MainContent = styled.div`
    width: 100%;
    margin-top: 20px;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:760px) {
        flex-direction: column;
        height: 90%;
        margin: 0;
    }

    & .vertLine{
        height: 90%;
        width: 1px;
        background-color: #ffffff65;
        @media screen and (max-width:760px) {
            display: none;
    }}
`
export const Apresentation = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width:760px) {
        width: 90%;
        align-items: center;
        height: 70%;
    }

`
export const TextApr = styled.div`
    width: 95%;
    height: 30%;

`

export const Title = styled.div`
    color: white;
    margin-bottom: 5px;
    & h3{
        font-size: 20px;
    }
    @media screen and (max-width:760px){
        font-size: 15px;
        margin-top: 15px;
        text-align: center;
    }
`

export const Text = styled.div`
    color: white;
    margin-bottom: 5px;
    
    & p{
        font-size: 16px;
    }
    @media screen and (max-width:760px){
        font-size: 14px;
        text-align: center;
        font-weight: lighter;
    }
`

export const SecApr = styled.div`
width: 95%;
height: 60%;
display: flex;
align-items: center;
@media screen and (max-width:760px) {
    height: 100%;
}
`

export const Image = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60%;
height: 95%;
& img{
    max-width: 200px;
    @media screen and (max-width:760px){
        width: 150px;
    }
}
`

export const ContactLinks = styled.div`
width: 40%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

    & a{
        color:#E162AE;
        width: 110px;
        border: 1px solid #e162aea9;
        padding: 2px 6px;
        text-align: center;
        text-decoration: none;
        display:flex;
        align-items: center;
        justify-content: space-around;
    }

`

export const AboutMe = styled.div`
width: 50%;
margin-left: 20px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:760px) {
    width: 90%;
    margin: 0;
}

`

export const Buttons = styled.div`
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & button{
        width: 100px;
        height: 35px;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        background: linear-gradient(90deg, #578ae7 7.69%, rgba(154, 78, 194, 0) 117.83%);
        color: white;
        font-size: 14px;
    }
    @media screen and (max-width:760px){
        & button{
            width: 80px;
        height: 30px;
        font-size: 12px;
        }
    }


`

export const Content = styled.div`
    width: 100%;
    height: 85%;

`


