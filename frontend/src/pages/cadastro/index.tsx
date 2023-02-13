import React, { useContext } from "react";
import { 
    Container
} from "./style";

import { BiLeftArrow } from 'react-icons/bi';
import FormRegister from "../../components/formRegister";
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";
import { RequestContext } from "../../context/request/requestsContext";


const PagCadastro = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login", { replace: true });
    };
    

    return (
        <Container>
            <div className="containerMain">
            <Button 
            variant="contained" 
            size="large" 
            className="btnReturnLogin"
            onClick={handleLogin}
            >
                <BiLeftArrow/>Voltar ao login
            </Button>
                <div className="containerForm">
                    <h1>Crie sua conta</h1>
                    <span>Rapido e grátis, vamos nessa</span>
                    <FormRegister/>
                </div>
            </div>
        </Container>
    )
}

export default PagCadastro;