import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';




// Creates the configuration object for Html5QrcodeScanner.
// const createConfig = (props:any) => {
//     let config:any = {};
//     if (props.fps) {
//         config.fps = props.fps;
//     }
//     if (props.qrbox) {
//         config.qrbox = props.qrbox;
//     }
//     if (props.aspectRatio) {
//         config.aspectRatio = props.aspectRatio;
//     }
//     if (props.disableFlip !== undefined) {
//         config.disableFlip = props.disableFlip;
//     }
//     return config;
// };

export const Html5QrcodePlugin = (props: any) => {

    // useEffect(() => {
    //     // when component mounts
    //     const config = createConfig(props);
    //     const verbose = props.verbose === true;
    //     // Suceess callback is required.
    //     if (!(props.qrCodeSuccessCallback)) {
    //         throw "qrCodeSuccessCallback is required callback.";
    //     }
    //     const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
    //     html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

    //     // cleanup function when component will unmount
    //     return () => {
    //         html5QrcodeScanner.clear().catch(error => {
    //             console.error("Failed to clear html5QrcodeScanner. ", error);
    //         });
    //     };
    // }, []);

    // return (
    //     <div id={qrcodeRegionId} />
    // );

    const [scanResult, setScanReuslt] = useState(null);

    useEffect(() => {
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
    }, [])



    return (
        <div>
            {
                scanResult
                ? <div className='text-white'>{scanResult}</div>
                : <div id='readerQR'></div>
            }
        </div>
    )
};
