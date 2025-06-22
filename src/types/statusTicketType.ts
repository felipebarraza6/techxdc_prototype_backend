// Definición de tipos y estructuras para manejar los estados de tickets
// src/Types/statusTicketType.ts

// Posibles valores del estado
export type TicketStatus = 'open' | 'in_progress' | 'closed' | 'on_hold';

// Datos mínimos requeridos para crear un nuevo estado de ticket
export interface CreateStatusTicketRequest {
  ticketId: number;
  status: TicketStatus;
  name: string;
  description?: string;
}

// Estructura de un status completo retornado desde la DB
export interface StatusTicketResponse {
  id: number;
  ticketId: number;
  status: TicketStatus;
  name: string;
  description?: string;
  created_at: Date;
  modified_at: Date | null;
}

// Estructura para actualizar un estado de ticket
export interface UpdateStatusTicketRequest {
  status?: TicketStatus;
  name?: string;
  description?: string;
}