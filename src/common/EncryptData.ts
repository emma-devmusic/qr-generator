import * as crypto from 'crypto-js';



//encriptador
export default class EncryptData {
    constructor(private key: string) {
        this.key = key;
        this.encrypt = this.encrypt.bind(this);
        this.decrypt = this.decrypt.bind(this);
    }
    encrypt(data: any) {
        try {
            return crypto.AES.encrypt(data, this.key).toString();
        } catch (e: any) {
            throw new Error(e.stack);
        }
    }
    decrypt(data: any) {
        try {
            const w = crypto.AES.decrypt(data, this.key);
            const datadecrypted = JSON.parse(w.toString(crypto.enc.Utf8));
            if (!datadecrypted) {
                throw new Error('Unauthorized');
            }
            return {
                error: false,
                data: datadecrypted,
            };
        } catch (e: any) {
            return { error: true, message: e.message };
        }
    }
}




//encripta la informacion del usuario logueado en sessionStorage
export const encryptAndSave = (data: any) => {
    const encrytp = new EncryptData(import.meta.env.VITE_SERVER_SECRET);
    const dataEncrypted = encrytp.encrypt(JSON.stringify( data ));
    sessionStorage.setItem('user-data', dataEncrypted);
    return {
        error: false,
        msg: 'Iniciando Session'
    }
}


//trae la informacion del usuario logueado desde el sessionStorage
export const useUser = () => {
    const encrytp = new EncryptData(import.meta.env.VITE_SERVER_SECRET);
    const dataEncrypted = sessionStorage.getItem('user-data');
    return encrytp.decrypt(dataEncrypted).data;
}



