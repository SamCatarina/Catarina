import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Content = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & p{
        min-height: 96px;
        max-width: 433px;
        color: white;
    }
`