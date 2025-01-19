export interface ApiError extends Error {
  response?: {
    data?: {
      errors?: Record<string, string[]>;
    };
  };
}

export interface ApiErrorSingle extends Error {
  response?: {
    data?: {
      message: any;
    };
  };
}
