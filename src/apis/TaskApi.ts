
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Task {
  taskId: string;
  assignedTo: string;
  status: string;
  comments: string;
}

export interface TaskDetails {
  // Define the fields for task details here
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export class TaskApi {
  static async createTask(taskDetails: TaskDetails): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.post(`${BASE_URL}/tasks`, taskDetails);
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  }

  static async updateTask(taskId: string, taskDetails: TaskDetails): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.put(`${BASE_URL}/tasks/${taskId}`, taskDetails);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  }
}