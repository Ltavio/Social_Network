import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../validations/loginClient.validations";
import { Container, ContainerCadastrar, ContainerForm } from "./style";

import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';


interface IUserLogin {
    email: string;
    password: string;
}

const FormLogin = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IUserLogin>({
      resolver: yupResolver(loginSchema),
    });

    const navigate = useNavigate();

    const registerLogin = ({...data}: IUserLogin) => {
        console.log(data)
        navigate("/dashboard", { replace: true });
    }

    const handleRegis = () => {
      navigate("/cadastro", { replace: true });
    };

    return (
        <Container>
            <ContainerForm onSubmit={handleSubmit(registerLogin)}>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                    <TextField
                        color={errors.email ? "error" : "primary"} 
                        id="email"
                        label="Email"
                        {...register("email")}
                    />
                    <FormHelperText id="email_error">{errors.email?.message}</FormHelperText>
                </FormControl>

                <FormControl color={errors.password ? "error" : "primary"} sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="password">Senha</InputLabel>
                    <OutlinedInput
                        id="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        {...register("password")}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    <FormHelperText id="password_error">{errors.password?.message}</FormHelperText>
                </FormControl>
                <Button variant="contained" size="large" className="btnEntrar" type="submit">Entrar</Button>
            </ContainerForm>
            <ContainerCadastrar>
                <span>Ainda não possui uma conta?</span>
                <Button 
                variant="contained" 
                size="large" 
                className="btnCadastro" 
                onClick={handleRegis}>
                    Cadastre-se
                </Button>
            </ContainerCadastrar>
        </Container>
    )
}

export default FormLogin;