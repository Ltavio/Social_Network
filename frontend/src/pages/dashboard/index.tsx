import React, { useContext } from "react";
import { Container, ContainerTecnologias, Header, Main, NavBar } from "./style";
import { MdOutlineAdd, MdDelete } from "react-icons/md";
import { AuthContextDashboard } from "../../context/request/dashboardContext";
import { SessionContext, SessionProvider } from "../../context/request/sessionContext";


const PagDashboard = () => {
    // const techs = [
    //     {title: "nao sei", status: "indo"},
    //     {title: "test", status: "testando"},
    //     {title: "mais um test", status: "testando2"},
    // ]
    const {user, contacts} = useContext(SessionContext)
    const {handleLogout} = useContext(AuthContextDashboard)

    return (
        <Container>
            {/* {modalCreateTec && (
                <CadastrarTecnologia setModalCreateTec={setModalCreateTec} />
            )}

            {modalRemoveTec && (
                <RemoverTecnologia setModalRemoveTec={setModalRemoveTec} />
            )}

            {modalEditTec && <EditarTecnologia setModalEditTec={setModalEditTec} />} */}

            <NavBar>
                <h1>Perfil</h1>
                <button onClick={handleLogout}>Sair</button>
            </NavBar>

            <Header>
                <div className="divsoriaNav"></div>
                <h2>@{user.name}</h2>
                <span>+{user.phone}</span>
                <div className="divsoriaHed"></div>
            </Header>
            <Main>
                <div className="headerMain">
                <h2>Contatos</h2>
                <button>
                    <MdOutlineAdd style={{ color: "white", fontSize: 20 }} />
                </button>
                </div>
                <ContainerTecnologias>
                {contacts.map((contact: any) => (
                    <div className="tecnologias">
                    <div>
                        <h4>{contact.title}</h4>
                        <p>{contact.status}</p>
                    </div>
                    <button>
                        <MdDelete style={{ fontSize: 17, color: "white" }} />
                    </button>
                    </div>
                ))}
                </ContainerTecnologias>
            </Main>
        </Container>
    )
}

export default PagDashboard;