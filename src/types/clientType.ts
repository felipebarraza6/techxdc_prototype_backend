export interface ClientAttributes {
  id_clients: number;
  name: string;
  dni: string;
  address?: string;
  comuna?: string;
  phone?: string;
  industry?: string;
  status?: string;
  score?: number;
  custom_fields?: Record<string, any>;
  created_at: Date;
  modified_at?: Date;
}

export interface CreateClientRequest {
  name: string;
  dni: string;
  address?: string;
  comuna?: string;
  phone?: string;
  industry?: string;
  status?: string;
  score?: number;
  custom_fields?: Record<string, any>;
}

export interface UpdateClientRequest {
  name?: string;
  dni?: string;
  address?: string;
  comuna?: string;
  phone?: string;
  industry?: string;
  status?: string;
  score?: number;
  custom_fields?: Record<string, any>;
}
export interface ClientResponse {
  id_clients: number;
  name: string;
  dni: string;
  address?: string;
  comuna?: string;
  phone?: string;
  industry?: string;
  status?: string;
  score?: number;
  custom_fields?: Record<string, any>;
  created_at: Date;
  modified_at?: Date;
}
