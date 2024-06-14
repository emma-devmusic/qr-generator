export const checkUser = (data: LoginData): User => {

    switch (data.user) {
        case import.meta.env.VITE_USER_ADMIN:
            return {
                name: 'Administrador',
                isAdmin: true
            }

        case import.meta.env.VITE_USER_READER:
            return {
                name: 'Administrador',
                isAdmin: false
            }
        default:
            return {
                name: '',
                isAdmin: false
            }
    }

}