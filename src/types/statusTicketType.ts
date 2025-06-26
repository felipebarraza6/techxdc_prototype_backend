export enum StatusTicketState {
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  CLOSED = "closed",
  ON_HOLD = "on_hold"
}

export interface CreateStatusTicketRequest {
  ticketId: number;
  status: StatusTicketState;
  name: string;
  description?: string;
}

export interface UpdateStatusTicketRequest {
  status?: StatusTicketState;
  name?: string;
  description?: string;
}
