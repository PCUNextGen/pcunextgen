/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Join request types and API functions
 */
export interface JoinRequest {
  id?: number;
  name: string;
  email: string;
  interest: 'ai-ml' | 'web-dev' | 'mobile-dev' | 'blockchain' | 'robotics' | 'cybersecurity' | 'data-science' | 'product';
  message?: string;
  consent: boolean;
  status?: 'pending' | 'approved' | 'rejected';
  created_at?: string;
  updated_at?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  errors?: Array<{ field: string; message: string }>;
}

export interface JoinStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

export interface InterestStat {
  interest: string;
  count: number;
  percentage: number;
}

// API Base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Submit a join request
 */
export async function submitJoinRequest(data: Omit<JoinRequest, 'id' | 'status' | 'created_at' | 'updated_at'>): Promise<ApiResponse<JoinRequest>> {
  try {
    const response = await fetch(`${API_BASE_URL}/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Get all join requests
 */
export async function getAllJoinRequests(): Promise<ApiResponse<JoinRequest[]>> {
  try {
    const response = await fetch(`${API_BASE_URL}/join`);
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Get join request statistics
 */
export async function getJoinStats(): Promise<ApiResponse<JoinStats>> {
  try {
    const response = await fetch(`${API_BASE_URL}/join/stats`);
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Get interest distribution statistics
 */
export async function getInterestStats(): Promise<ApiResponse<InterestStat[]>> {
  try {
    const response = await fetch(`${API_BASE_URL}/join/interests`);
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Test backend connectivity
 */
export async function testBackendConnection(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/health`);
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: 'Backend connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
