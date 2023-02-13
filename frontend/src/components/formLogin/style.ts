import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    gap: 25px;

    .btnEntrar {
        width: 100%;
        background-color: rgb(255, 87, 127);

        :hover {
            background-color: rgb(255, 87, 127);
        }
    }

    #email_error {
        color: red;
    }

    #password_error {
        color: red;
    }

`

export const ContainerCadastrar = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    span {
        text-align: center;
        margin: 10px 0 18px 0;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 13px;
        color: black;
    }
    .btnCadastro {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 13px;
        background-color: #868e96;
        margin-bottom: 30px;

        :hover {
            background-color: #868e96;
        }
    }
`;
