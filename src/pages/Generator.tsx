import { Icon } from '@iconify/react';
import { useForm } from '../hooks/useForm';
import { useState } from 'react';
import EncryptData from '../common/EncryptData';
import QRCode from "qrcode.react";

export const Generator = () => {

    const [qr, setQr] = useState<string | null>(null)

    const [values, handleInputChange] = useForm({
        email: '',
        name: '',
        dni: '',
    });

    const handleCreateQR = (e: any) => {
        e.preventDefault();
        const encrypt = new EncryptData(import.meta.env.VITE_SERVER_SECRET);
        const valuesEncrypted = encrypt.encrypt(JSON.stringify(values))
        setQr(valuesEncrypted);
    }
    const downloadQR = () => {
        const canvas:any = document.getElementById("imgQR");
        const pngUrl = canvas
            ?.toDataURL("image/png")
            ?.replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "imgQR.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <div className='d-flex justify-content-center w-100 ' id='generator'>
            <div className='card p-3 card-eterna'>
                <div className='d-flex align-items-center justify-content-center'>
                    <h2 className='text-center m-0 m-2 fs-1 text-white'>Generador de QR</h2>
                    <Icon icon={'bx:qr'} className='text-white' style={{
                        width: '20px',
                        height: '20px'
                    }} />
                </div>
                <hr className='w-100 bg-white'/>
                <form action="" onSubmit={handleCreateQR}>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><Icon icon={'mdi:user'} className='' /></span>
                        <input value={values.name} onChange={handleInputChange} minLength={3} name='name' type="text" className="form-control" placeholder="Nombre Completo" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><Icon icon={'mdi:email'} className='' /></span>
                        <input value={values.email} onChange={handleInputChange} name='email' type="email" className="form-control" placeholder="Correo Electróncio" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><Icon icon={'heroicons:identification-16-solid'} className='' /></span>
                        <input value={values.dni} onChange={handleInputChange} name='dni' type="text" className="form-control" placeholder="DNI" required/>
                    </div>
                    <input type='submit' className='btn btn-danger' minLength={7} value={'Generar QR'}/>
                </form>
                <hr className='w-100 bg-white'/>
                <div className='m-3 d-flex justify-content-center align-items-center h-100'>
                    {
                        qr &&
                        <div className='box-qr d-flex flex-column '>
                            <QRCode
                                id="imgQR"
                                value={qr}
                                size={290}
                                level={"H"}
                                includeMargin={true}
                            />
                            <button className='btn btn-danger mt-2' onClick={downloadQR} id='btnDownload'>
                                <Icon icon={'ic:round-download'} />
                                Descargar
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
