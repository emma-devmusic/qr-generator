import { Icon } from '@iconify/react/dist/iconify.js';
import { Html5QrcodePlugin } from '../components/Html5QrcodePlugin';



export const Reader = () => {




    return (
        <div className='d-flex justify-content-center w-100' id='reader'>
            <div className='card p-3 card-eterna'>
                <div className='d-flex align-items-center justify-content-center'>
                    <h2 className='text-center m-0 m-2 fs-1 text-white'>Lector QR</h2>
                    <Icon icon={'bx:qr'} className='text-white' style={{
                        width: '20px',
                        height: '20px'
                    }} />
                </div>
                <hr className='w-100 bg-white' />
                <div>
                    <Html5QrcodePlugin />
                </div>
                <hr className='w-100 bg-white' />
            </div>
        </div>
    )
}

