export interface ModuleAttributes {
  id: number;
  slug: string;
  description: string;
}

export interface CreateModuleRequest {
  slug: string;
  description: string;
}

export interface UpdateModuleRequest {
  slug?: string;
  description?: string;
}

export interface ModuleResponse {
  id: number;
  slug: string;
  description: string;
}
