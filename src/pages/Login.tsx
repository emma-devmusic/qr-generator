import { useState } from 'react'
import logo from '../assets/img/logo-text-white.png'
import { useForm } from '../hooks/useForm'
import { Icon } from '@iconify/react/dist/iconify.js'



export const Login = () => {

    const [values, handleInputChange, reset] = useForm({
        user: '',
        pass: '',
        remember: ''
    })

    const [ remember, setRemember ] = useState(false)

    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => setShowPass(!showPass);

    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    return (
        <section 
            className="bg-light py-3 py-md-5 d-flex justify-content-center align-items-center" 
            style={{
                minHeight: '100%'
            }}
            id='login'
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="text-center">
                                    <img src={logo} alt="BootstrapBrain Logo" style={{
                                        width: '130px',
                                        height: '50px',
                                        objectFit: 'cover'
                                    }}/>
                                </div>
                                <h2 className="fs-6 fw-normal text-center text-white mb-4">Ingresa a tu cuenta</h2>
                                <form action="#!">
                                    <div className="row gy-2 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="user"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                />
                                                <label htmlFor="email" className="form-label">Usuario</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='d-flex w-100 align-items-center'>
                                                <div className="form-floating mb-3 w-100">
                                                    <input
                                                        type={!showPass ? "password" : "text"}
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        required
                                                    />
                                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                                </div>
                                                {
                                                    !showPass
                                                    ?
                                                    <Icon 
                                                        id='showPass' 
                                                        icon={ 'iconoir:eye-solid' } 
                                                        onClick={handleShowPass}
                                                        style={{
                                                        position: 'absolute',
                                                        fontSize: '1.5rem',
                                                        transform: 'translateY(-8px)'
                                                    }}/>
                                                    :
                                                    <Icon 
                                                        id='showPass' 
                                                        icon={ 'fluent:eye-off-24-filled' } 
                                                        onClick={handleShowPass}
                                                        style={{
                                                        position: 'absolute',
                                                        fontSize: '1.5rem',
                                                        transform: 'translateY(-8px)'
                                                    }}/>
                                                }

                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="d-flex gap-2 justify-content-between">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={remember}
                                                        onChange={() => setRemember(!remember)}
                                                        name="rememberMe"
                                                        id="rememberMe"
                                                    />
                                                    <label className="form-check-label text-white" htmlFor="rememberMe">
                                                        Recordarme
                                                    </label>
                                                </div>
                                                {/* <a href="#!" className="link-primary text-decoration-none">Forgot password?</a> */}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button 
                                                    className="btn btn-danger btn-lg" 
                                                    type="submit"
                                                    onClick={handleSubmit}
                                                >
                                                    Ingresar
                                                </button>
                                            </div>
                                        </div>
                                        {/* <div className="col-12">
                                            <p className="m-0 text-secondary text-center">
                                                Don't have an account? <a href="#!" className="link-primary text-decoration-none">Sign up</a>
                                            </p>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
