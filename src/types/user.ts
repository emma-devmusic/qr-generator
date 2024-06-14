interface UserResponse {
    error: boolean;
    name: string;
    isAdmin: boolean;
}

interface User {
    name: string;
    isAdmin: boolean;
}

interface LoginData {
    user: string;
    pass: string;
}