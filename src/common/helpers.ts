import EncryptData from "./EncryptData"

//guarda la informacion de las credenciales para recordar el logueo
export const rememberLoginData = (data: LoginData) => {
    const encrypt = new EncryptData(import.meta.env.VITE_SERVER_SECRET)
    const dataEncrypted = encrypt.encrypt(JSON.stringify(data));
    localStorage.setItem('user-remember', dataEncrypted);
}


//revisa que exista un usuario para recordar guardado
export const checkingUserRemember = () => {
    if (localStorage.getItem('user-remember')) {
        const dataEncrypted = localStorage.getItem('user-remember')
        const encrypt = new EncryptData(import.meta.env.VITE_SERVER_SECRET)
        return encrypt.decrypt(dataEncrypted).data as LoginData
    } else {
        return null
    }
}


//revisa que exista session iniciada
export const checkingSession = () => !!sessionStorage.getItem('user-data')