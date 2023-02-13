import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BiLeftArrow } from 'react-icons/bi';
import FormRegister from "../../components/formRegister";
import Button from '@mui/material/Button';
import { BoxLogin, Container } from "./style";
import FormLogin from "../../components/formLogin";


const PagLogin = () => {
    return (
        <Container>
          <BoxLogin>
            <h2>Login</h2>
            <FormLogin/>
          </BoxLogin>
        </Container>
    );
}

export default PagLogin;