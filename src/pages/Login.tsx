import logo from '../assets/img/logo-text-red.png'



export const Login = () => {
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
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                />
                                                <label htmlFor="email" className="form-label">Usuario</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    required
                                                />
                                                <label htmlFor="password" className="form-label">Contraseña</label>
                                            </div>
                                        </div>
                                        {/* <div className="col-12">
                                            <div className="d-flex gap-2 justify-content-between">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        name="rememberMe"
                                                        id="rememberMe"
                                                    />
                                                    <label className="form-check-label text-secondary" htmlFor="rememberMe">
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                                <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                                            </div>
                                        </div> */}
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn btn-danger btn-lg" type="submit">Ingresar</button>
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
