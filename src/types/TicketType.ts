export enum TicketPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface CreateTicketRequest {
  title: string;
  description: string;
  created_by: number;
  catchment_point_id: number;
  designated: number;
  priority: TicketPriority;
  custom_fields?: object;
}

export interface UpdateTicketRequest {
  title?: string;
  description?: string;
  created_by?: number;
  catchment_point_id?: number;
  designated?: number;
  priority?: TicketPriority;
  custom_fields?: object;
}