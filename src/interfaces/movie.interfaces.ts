interface iMovie  {
    id: number,
    title: string,
    description: string,
    image: string,
    video: string,
    tag: string
}
interface iUser {
    id:number,
    token: string,
    username:string,
    email: string,
    password: string
}

type iUserRequest = Omit<iUser, "id" & 'token'>

export {iMovie, iUser, iUserRequest}