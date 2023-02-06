export interface IClient {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  };

export interface IClientRequest {
  name: string;
  email: string;
  password: string;
  phone: number;
};

export interface IClientLogin {
  email: string;
  password: string;
};

export interface IClientUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: number;
};

export interface IClientResponse {
  message: string,
  data: IClient
};

export interface IListClientResponse {
  message: string,
  data: IClient
};