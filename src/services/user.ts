

export const checkUser = (data: LoginData): UserResponse | { error: boolean, msg: string } => {

    const error = {
        error: true,
        msg: 'Usuario o Contraseña Incorrecta'
    }

    switch (data.user) {
        case import.meta.env.VITE_USER_ADMIN:
            if (data.pass === import.meta.env.VITE_PASS_ADMIN) {
                return {
                    error: false,
                    name: 'Administrador',
                    isAdmin: true
                }
            } else {
                return error
            }

        case import.meta.env.VITE_USER_READER:
            if (data.pass === import.meta.env.VITE_PASS_READER) {
                return {
                    error: false,
                    isAdmin: false,
                    name: 'Lector QR'
                }
            } else {
                return error
            }
        default:
            return error
    }

}