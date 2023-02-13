import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaRegisterClient } from "../../validations/registerClient.validations";
import { FormStyled } from "./style";

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
import { RequestContext } from "../../context/request/requestsContext";

interface ICadastroData {
    email: string;
    name: string;
    password: string;
    phone: string;
}


const FormRegister = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {createClient} = useContext(RequestContext)


    const {
        register,
        handleSubmit,
        formState: { errors },
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useForm<ICadastroData>({
        resolver: yupResolver(schemaRegisterClient)
    });

    const handleRegister = ({ ...data }: ICadastroData) => {
        console.log(data)
    }

    return (
        <FormStyled onSubmit={handleSubmit(createClient)}>
            <FormControl  sx={{ width: '100%' }} variant="outlined">
                <TextField
                    className="name"
                    color={errors.name ? "error" : "primary"}
                    id="name"
                    label="Name"
                    {...register("name")}
                />
                <FormHelperText id="name_error">{errors.name?.message}</FormHelperText>
            </FormControl>

            <FormControl sx={{ width: '100%' }} variant="outlined">
                <TextField
                    color={errors.phone ? "error" : "primary"}
                    id="phone"
                    label="Celular"
                    type="number"
                    {...register("phone")}
                />
                <FormHelperText id="phone_error">{errors.phone?.message}</FormHelperText>
            </FormControl>

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
            <Button variant="contained" type="submit">Cadastrar</Button>

        </FormStyled>
    )
}

export default FormRegister;
