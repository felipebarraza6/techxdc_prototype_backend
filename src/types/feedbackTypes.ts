export interface Feedback {
  id: number;
  ticket_id: number;
  client_id: number;
  rating: number;
  comments?: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateFeedbackRequest {
  ticket_id: number;
  client_id: number;
  rating: number;
  comments?: string;
}

export interface UpdateFeedbackRequest {
  rating?: number;
  comments?: string;
}

export interface FeedbackResponse {
  id: number;
  ticket_id: number;
  client_id: number;
  rating: number;
  comments?: string;
  created_at: Date;
  updated_at: Date;
}


