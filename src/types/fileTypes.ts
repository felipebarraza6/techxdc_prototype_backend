export enum FileType {
    PDF = "pdf",
    EXCEL = "excel",
    WORD = "word",
    IMAGE = "image",
    OTHER = "other",
};

export interface CreateFileRequest {
  catchment_point_id: number;
  file_name: string;
  file_path: string;
  file_type_id: number;
  description?: string | null;
  expiration_date?: Date | null;
  is_valid?: boolean;
  response_ticket_id?: number | null;
  uploaded_by: number;
  quotation_id?: number | null;
}

export interface FileAttributes {
  id: number;
  catchment_point_id: number;
  file_name: string;
  file_path: string;
  file_type_id: number;
  description?: string | null;
  expiration_date?: Date | null;
  is_valid?: boolean;
  response_ticket_id?: number | null;
  uploaded_by: number;
  quotation_id?: number | null;
}

export type FileCreationAttributes = Omit<FileAttributes, 'id' | 'createdAt' | 'updatedAt' >;