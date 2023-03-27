import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    margin-top: 30px;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & p{
        color: white;
        font-size: 24px;
    }

`
export const Project = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;



    & img {
        max-width:250px;
        max-height: 200px;
    }
    & p{
        font-size: 18px;
        margin-top: 10px;
        
    }

`