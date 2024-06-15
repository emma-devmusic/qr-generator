import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { useEffect } from "react";
import { checkingSession } from "./common/helpers";

export const Layout = () => {

    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        //Revisar si hay o no session iniciada y redireccionar en cada caso
        if( !checkingSession() ) {
            if(location.pathname !== '/login') navigate('/login')
        } else {
            if(location.pathname === '/login') navigate('/')
        }
    },[])

    return (
        <div>
            <Navbar />
            <div className="appContainer">
                <Outlet />
            </div>
        </div>
    )
}
