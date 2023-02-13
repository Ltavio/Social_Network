import { ReactNode } from "react";
import { RequestProvider } from "./request/requestsContext";
import { SessionProvider } from "./request/sessionContext";
import AuthProviderDashboard from "./request/dashboardContext";

interface IPropsContext {
    children: ReactNode | any;
}

const ContextMain = ({children}: IPropsContext) => (
    <SessionProvider>
        <RequestProvider>
            <AuthProviderDashboard>
                {children}
            </AuthProviderDashboard>
        </RequestProvider>
    </SessionProvider>
)

export default ContextMain;
