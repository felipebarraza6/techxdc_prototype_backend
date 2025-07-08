export interface TypeContactAttributes {
  id: number;
  type: string;
}

export interface CreateTypeContactRequest {
  type: string;
}

export interface UpdateTypeContactRequest {
  type?: string;
}

export interface TypeContactResponse {
  id: number;
  type: string;
}
