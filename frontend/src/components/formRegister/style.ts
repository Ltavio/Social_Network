import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 15px;

    .name {
        color: white;
    }

    /* levantamento de erros */
    #name_error {
        color: red;
    }
    #phone_error {
        color: red;
    }
    #email_error {
        color: red;
    }
    #password_error {
        color: red;
    }
`