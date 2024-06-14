import { Icon } from '@iconify/react/dist/iconify.js';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Html5QrcodePlugin } from '../components/Html5QrcodePlugin';



export const Reader = () => {

    const onNewScanResult = (decodedText:any, decodedResult:any) => {
        // handle decoded results here
        
    };


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
                <Html5QrcodePlugin
                        // fps={10}
                        // qrbox={200}
                        // disableFlip={false}
                        // qrCodeSuccessCallback={onNewScanResult}
                    />
                </div>
                <hr className='w-100 bg-white' />
                <div className='m-3 d-flex justify-content-center align-items-center h-100'>
                    
                </div>
            </div>
        </div>
    )
}

