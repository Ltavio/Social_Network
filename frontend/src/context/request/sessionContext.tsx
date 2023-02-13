import { AxiosResponse } from "axios";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClientLogin, IContacts, IUser } from "../../interfaces/client";
import api from "../../services/api";

interface ISession {
    loginClient: (data: ClientLogin) => Promise<void>;
    logout: () => void;
    user: any;
    contacts: any;
}

export const SessionContext = createContext({} as ISession)

interface IPropsRequest {
    children: ReactNode;
}

export const SessionProvider = ({children}: IPropsRequest) => {
    const [contacts, setContacts] = useState<IContacts[]>([]);
    const [user, setUser] = useState<IUser>({} as IUser);

    const token = JSON.parse(localStorage.getItem("TOKEN_AUTH") || '{}');
    const idUser = JSON.parse(localStorage.getItem("USERID") || '{}');

    // dashboard
    useEffect(() => {
        async function loginUserConstant() {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            
            if (token) {
                const { data } = await api.get(`/clients`, config);

                setUser(data);
                setContacts(data.contacts);
            }
        }
        loginUserConstant();
    }, [token, user, contacts]);

    const loginClient = async(data: ClientLogin) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

        try {
            const response: AxiosResponse = await api.post("/login", {
                ...data
            })

            const { token } = response.data;
            const { id } = response.data.user;

			if (api.defaults.headers != null) {
				api.defaults.headers.common.Authorization =  `Bearer ${token}` 
			};

            localStorage.setItem("TOKEN_AUTH", JSON.stringify(token));
            localStorage.setItem("USERID", JSON.stringify(id));

            toast.success("Usuário logado")

            setTimeout(() => {
                navigate("/dashboard", { replace: true });
            }, 2000);

        } catch (_) {
            toast.error("Verifique seu email ou senha")
        }
    }

    const logout = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

		localStorage.removeItem('TOKEN_AUTH');
		navigate('/login', { replace: true });
    };

    
    return (
        <SessionContext.Provider 
        value={{
            loginClient, 
            logout,
            user,
            contacts,
            }}>
            {children}
        </SessionContext.Provider>
    )
}
