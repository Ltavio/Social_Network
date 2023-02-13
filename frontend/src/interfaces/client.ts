export interface ClientRequest {
    name: string;
    password: string;
    email: string;
    phone: string;
}

export interface ClientLogin {
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface IContacts {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface IPropsModais {
    id: string;
  }