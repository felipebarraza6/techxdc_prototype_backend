export interface CreateResponseTicketRequest {
  ticket_id: number;
  message: string;
  created_by: number;
}

export interface UpdateResponseTicketRequest {
  message?: string;
  created_by?: number;
}

export interface ResponseTicketResponse {
  id: number;
  ticket_id: number;
  message: string;
  created_by: number;
  created_at: Date;
  modified_at: Date;
}
