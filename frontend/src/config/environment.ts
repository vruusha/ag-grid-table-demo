// Environment Configuration
export const ENV_CONFIG = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
  API_ENDPOINTS: {
    ORDERS: '/api/orders',
  },
  TIMEOUT: 10000, // 10 seconds
} as const;

export const buildApiUrl = (endpoint: string, params?: Record<string, string | number>) => {
  const url = new URL(`${ENV_CONFIG.API_BASE_URL}${endpoint}`);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  
  return url.toString();
}; 