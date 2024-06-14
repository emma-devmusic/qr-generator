import { Icon } from "@iconify/react/dist/iconify.js"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../common/EncryptData"

export const Welcome = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(!useUser().isAdmin) {
            navigate('/reader')
        }
    },[])

    return (
        <div className='d-flex justify-content-center w-100' id='welcome'>
            <div className='card p-3 card-eterna'>
                <div className='d-flex align-items-center justify-content-center'>
                    <h2 className='text-center m-0 m-2 fs-1 text-white'>Bienvenido</h2>
                    <Icon icon={'bx:qr'} className='text-white' style={{
                        width: '20px',
                        height: '20px'
                    }} />
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <p className="text-white">¿Qué necesitas?</p>
                </div>
                <hr className='w-100 bg-white' />
                <div className='m-3 d-flex justify-content-center gap-3 align-items-center h-100'>
                    <Link to={'/reader'} className="btn btn-danger">Lector QR</Link>
                    <Link to={'/generator'} className="btn btn-danger">Generador QR</Link>
                </div>
            </div>
        </div>
    )
}