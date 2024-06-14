import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from '../assets/img/logo-text-white.png'

export const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate();

    const login = location.pathname === '/login'

    const handleLogout = () => {
        navigate('/login');
        sessionStorage.clear();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src={logo} alt="" style={{
                        width: '120px',
                        height: '40px',
                        objectFit: 'cover',
                        position: 'relative',
                        top: '3px'
                    }} />
                </div>
                {
                    !login &&
                    <>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/"></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/generator">Generador</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reader">Lector</Link>
                                </li>
                            </ul>
                            <div>
                                <button 
                                    className="btn btn-outline-danger"
                                    onClick={handleLogout}
                                >
                                    Salir
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </nav>
    )
}
