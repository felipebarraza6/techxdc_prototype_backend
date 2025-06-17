export interface ContactAttributes {
  id_contacts: number;
  id_client: number;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  custom_fields?: Record<string, any>;
  type: number;
  created_at?: Date;
  modified_at?: Date;
}

export interface CreateContactRequest {
  id_client: number;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  custom_fields?: Record<string, any>;
  type: number;
}

export interface UpdateContactRequest {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  custom_fields?: Record<string, any>;
  type?: number;
}

export interface ContactResponse {
  id_contacts: number;
  id_client: number;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  custom_fields?: Record<string, any>;
  type: number;
  created_at?: Date;
  modified_at?: Date;
}
export interface ContactType {
  id_contacts: number;
  id_client: number;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  custom_fields?: Record<string, any>;
  type: number;
  created_at?: Date;
  modified_at?: Date;
}