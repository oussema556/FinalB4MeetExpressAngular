export class UserSession{
  constructor(
    public accessToken : string,
    public id: string,
    public email: string,
    public roles: string[],
    public fullName: string,
  ){}
}
