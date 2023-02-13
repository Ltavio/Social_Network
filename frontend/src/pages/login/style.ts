import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    width: 100vw;
    height: 100vh;
`;

export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    width: 92.5%;
    max-width: 369px;
    height: 79.8%;
    max-height: 432px;

    background-color: rgb(173 173 173 / 0%);
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 40px -10px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    
    h2 {
        font-family: "Inter", sans-serif;
        font-weight: 900;
        font-style: 16px;
        margin: 30px 0 23px 0;
    }
`;
