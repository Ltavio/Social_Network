export interface IContact {
    id: string;
    name: string;
    email: string;
    phone: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export interface IContactRequest {
  name: string;
  email: string;
  phone: number;
};

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone?: number;
};

export interface IContactResponse {
  message: string,
  data: IContact
};

export interface IListContactResponse {
  message: string,
  data: IContact[]
};