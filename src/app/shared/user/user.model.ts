export interface IUser{
    _id?: string
    fullusername: string
    email: string
    password? : string
    phone? : string
    city? : string
    avatar_url? : string
    role? : string
    isGranted : boolean
    token?: string
}