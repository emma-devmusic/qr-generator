import EncryptData from "../common/EncryptData"

const error = {
    error: true,
    msg: 'Usuario o Contraseña Incorrecta'
}

export const checkUser = (data: LoginData): UserResponse | { error: boolean, msg: string } => {

    const encrypt = new EncryptData(import.meta.env.VITE_SERVER_SECRET);
    const dataDecryptAdmin = encrypt.decrypt(import.meta.env.VITE_USER_ADMIN)
    const dataDecryptReader = encrypt.decrypt(import.meta.env.VITE_USER_READER)

    if (JSON.stringify(dataDecryptReader.data) === JSON.stringify(data)) return {
        error: false,
        isAdmin: false,
        name: 'Lector QR'
    }
    if (JSON.stringify(dataDecryptAdmin.data) === JSON.stringify(data)) return {
        error: false,
        name: 'Administrador',
        isAdmin: true
    }
    return error
}