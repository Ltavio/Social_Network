import { createContext, ReactNode, useContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClientRequest } from "../../interfaces/client";
import api from "../../services/api";

interface ICadastroData {
    email: string;
    name: string;
    password: string;
    phone: string;
}

interface IRequest {
    createClient: (data: ICadastroData) => Promise<void>;
}

export const RequestContext = createContext<IRequest>({} as IRequest)

interface IPropsRequest {
    children: ReactNode;
}


export const RequestProvider = ({children}: IPropsRequest) => {

    const createClient = async ({...data}: ClientRequest) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();
    
        try {
            await api.post('/clients', {
                ...data
            })
            
            toast.success("Usuário criado com sucesso!")

            setTimeout(() => {
                navigate("/login", { replace: true });
            }, 2000);
    
        } catch (_) {
            toast.error("Verifique as informações")
        }
    }

    
    return (
        <RequestContext.Provider value={{createClient}}>
            {children}
        </RequestContext.Provider>
    )
}
