export class Users {
  _id?: number;
  name: string;
  email: string;
  phones: number;

  constructor(name: string, email: string, phones: number){
    this.name = name
    this.email = email
    this.phones = phones
  }
}

