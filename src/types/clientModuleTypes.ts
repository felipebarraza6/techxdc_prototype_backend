
export interface ClientModuleAttributes {
  id: number;
  module_id: number;
  enabled_to_type: 'project' | 'client' | 'quote';
  reference_id: number;
  is_enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateClientModuleRequest {
  module_id: number;
  enabled_to_type: 'project' | 'client' | 'quote';
  reference_id: number;
  is_enabled?: boolean; // opcional, por defecto true
}

export interface UpdateClientModuleRequest {
  module_id?: number;
  enabled_to_type?: 'project' | 'client' | 'quote';
  reference_id?: number;
  is_enabled?: boolean;
}

export interface ClientModuleResponse {
  id: number;
  module_id: number;
  enabled_to_type: 'project' | 'client' | 'quote';
  reference_id: number;
  is_enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
