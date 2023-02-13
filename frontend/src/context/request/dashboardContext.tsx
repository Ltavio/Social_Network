import React from "react";
import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { IPropsModais } from "../../interfaces/client";
import api from "../../services/api";

interface IDashboard {
    removeContact: (id: IPropsModais) => void;
    handleLogout: () => void;
}

export const AuthContextDashboard = createContext<IDashboard>({} as IDashboard);

interface IChildrenDashboard {
    children: ReactNode;
}

const AuthProviderDashboard = ({ children }: IChildrenDashboard) => {
    const token = JSON.parse(localStorage.getItem("TOKEN_AUTH") || '{}');
    const autenticacao = JSON.parse(localStorage.getItem("TOKEN_AUTH") || '{}');

    const navigate = useNavigate();

    useEffect(() => {
        if (!autenticacao) {
        return navigate("/login", { replace: true });
        }
    }, [autenticacao]);

    //voltar para a tela de login
    const handleLogout = () => {
        localStorage.clear();

        navigate("/login", { replace: true });
    };

    const removeContact = ({ id }: IPropsModais) => {
        /* setModalRemoveTec(true); */
    
        api.delete(`/contacts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    // const handleEditContact = ({ tecnologia }: IPropsModais) => {
    //     setModalEditTec(true);
    //     setEditTech(tecnologia);
    //   };

    return (
        <AuthContextDashboard.Provider
          value={{
            removeContact,
            handleLogout,
          }}
        >
          {children}
        </AuthContextDashboard.Provider>
      );
};

export default AuthProviderDashboard;
