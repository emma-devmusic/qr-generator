import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import { ScannerResult } from './ScannerResult';


export const Html5QrcodePlugin = () => {

    const [scanResult, setScanReuslt] = useState(null);
    useEffect(() => {
        if (!scanResult) {
            const scanner = new Html5QrcodeScanner(
                'readerQR',
                {
                    qrbox: {
                        width: 200,
                        height: 200,
                    },
                    fps: 5
                },
                true
            )
            const success = (result: any) => {
                scanner.clear();
                setScanReuslt(result)
            }
            const error = (err: any) => { console.warn(err) }
            scanner.render(success, error)
        }
    }, [scanResult])

    return (
        <div>
            {
                scanResult
                    ? <div className='text-white px-5'>
                        <ScannerResult result={scanResult} />
                        <button
                            className='btn btn-danger w-100'
                            onClick={() => setScanReuslt(null)}
                        >
                            Escanear
                        </button>
                    </div>
                    : <div id='readerQR'></div>
            }
        </div>
    )
};
