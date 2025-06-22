export interface CreateResponseTicketRequest {
  ticket_id: number;
  message: string;
  created_by: string;
}

export interface UpdateResponseTicketRequest {
  message?: string;
  created_by?: string;
}

export interface ResponseTicketResponse {
  id: number;
  ticket_id: number;
  message: string;
  created_by: string;
  created_at: Date;
  modified_at: Date;
}
