export enum TaskStatus {
    PENDING = "pending",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
};

export interface CreateTaskRequest {
    title: string;
    description?: string;
    status?: TaskStatus;
    created_by: number;
}
