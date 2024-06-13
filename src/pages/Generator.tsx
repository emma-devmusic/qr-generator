import { Icon } from '@iconify/react';
import { useForm } from '../hooks/useForm';
import { useEffect, useState } from 'react';
import QRCode from "react-qr-code";


export const Generator = () => {

    const [qr, setQr] = useState<string | null>(null)

    const [values, handleInputChange, reset] = useForm({
        email: '',
        name: '',
        dni: '',
    });

    const handleCreateQR = (e:any) => {
        e.preventDefault();
        setQr( JSON.stringify(values) )
    }

    return (
        <div className='card p-3 mt-3' style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
        }}>
            <div className='d-flex align-items-center justify-content-center'>
                <h2 className='text-center m-0 m-2 fs-1'>Generador de QR</h2>
                <Icon icon={'bx:qr'} className='' style={{
                    width: '20px',
                    height: '20px'
                }} />
            </div>
            <hr />
            <form action="">
                <div className="input-group mb-3">
                    <span className="input-group-text"><Icon icon={'mdi:email'} className='' /></span>
                    <input value={values.email} onChange={handleInputChange} name='email' type="email" className="form-control" placeholder="Correo Electróncio" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text"><Icon icon={'mdi:user'} className='' /></span>
                    <input value={values.name} onChange={handleInputChange} name='name' type="text" className="form-control" placeholder="Nombre Completo" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text"><Icon icon={'heroicons:identification-16-solid'} className='' /></span>
                    <input value={values.dni} onChange={handleInputChange} name='dni' type="text" className="form-control" placeholder="DNI" />
                </div>
                <button className='btn btn-primary' onClick={handleCreateQR}>Generar QR</button>
            </form>
            <hr />
            <div className='m-3 d-flex justify-content-center align-items-center h-100'>
                {
                    qr &&
                    <QRCode
                        size={200}
                        style={{ maxWidth: "500px"}}
                        value={qr}
                        viewBox={`0 0 256 256`}
                    />
                }
            </div>
        </div>
    )
}
